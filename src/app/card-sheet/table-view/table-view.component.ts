import {
  Component,
  OnInit,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

import { animate, style, transition, trigger } from '@angular/animations';

import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GridTableDataSource } from '../virtual-scroll/data-source';
import { TableViewDataService } from './table-view-data.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent<T> implements OnInit {
  @Input() click;

  checked = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  tableData: any[] = [];
  mappedTableData = ([] = []);
  displayedColumns: string[];
  headers = [];

  previousIndex: number;

  /* Virtual scrolling variables */
  pending: boolean;
  sticky = false;
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  dataSource: GridTableDataSource<T>;
  offset: Observable<number>;
  visibleColumns: any[];
  _alldata: any[];

  page = 1;
  pageSize = 10;

  serieChange;

  constructor(protected tableDataService: TableViewDataService) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    this.init();
    this.headers = ['DATE', 'AMERICA', 'EUROPE', 'AUSTRALIA', 'ASIA'];
    this.displayedColumns = this.headers;

    this.tableDataService.getData().map(
      (data) => {
        this.tableData.push(data);

        this._alldata = this.tableData.map((val) =>
          val.reduce(
            (headerVal, data, index) => ({
              ...headerVal,
              [this.headers[index]]: data,
            }),
            {}
          )
        );

        this.dataSource.allData = this._alldata.slice(0, this.pageSize);
      },
      (err: any) => console.log(err)
    );
  }

  private init() {
    if (this.dataSource) {
      return;
    }
    this.dataSource = new GridTableDataSource([], {
      viewport: this.viewport,
    });

    this.offset = this.viewport.renderedRangeStream.pipe(
      map(() => -this.viewport.getOffsetToRenderedContentStart())
    );
  }

  nextBatch(event) {
    if (!this.sticky) {
      this.sticky = true;
    }
    const buffer = 20;
    const range = this.viewport.getRenderedRange();
    const end = range.end;
    if (this.dataSource.allData && this.dataSource.allData.length > 0) {
      if (end + buffer > this.page * this.pageSize) {
        this.page++;
        this.pending = true;
        setTimeout(() => {
          this.dataSource.allData = this._alldata.slice(
            0,
            this.page * this.pageSize
          );
          this.pending = false;
        }, 250);
      }
    }
  }
}
