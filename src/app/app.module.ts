import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TableViewModule } from './card-sheet/table-view/table-view.module';
import { TableViewComponent } from './card-sheet/table-view/table-view.component';

import { 
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
   } from "@angular/material";

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    TableViewModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [ AppComponent, TableViewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
