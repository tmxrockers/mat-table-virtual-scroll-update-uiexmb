import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridTableFixedVirtualScrollDirective } from './virtual-scroll.directive';

const components = [GridTableFixedVirtualScrollDirective];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components,
})
export class VirtualScrollModule { }