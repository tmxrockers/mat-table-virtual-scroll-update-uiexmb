import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { TableViewComponent } from './table-view.component';

import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { DragDropModule }  from '@angular/cdk/drag-drop';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollModule } from '../virtual-scroll/virtual-scroll.module';

import { 
  MatInputModule, 
  MatPaginatorModule, 
  MatProgressSpinnerModule, 

  MatTableModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatCheckboxModule,
  MatProgressBarModule,
  MatSortModule,
   } from "@angular/material";
import { TableViewDataService } from './table-view-data.service';

@NgModule({
  imports: [HttpClientModule,
  BrowserModule, 
    FormsModule,
    MatInputModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule, 
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
 
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    DragDropModule,
    VirtualScrollModule,
    ScrollingModule],
  exports: [CommonModule,
    BrowserModule, 
    FormsModule,
    MatInputModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule, 
    MatSortModule, 
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,

    MatCheckboxModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    DragDropModule,
    VirtualScrollModule,
    ScrollingModule
  ],
  declarations: [],
  providers: [TableViewDataService]
})
export class TableViewModule { }