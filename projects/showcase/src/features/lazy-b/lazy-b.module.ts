import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyBRoutingModule } from './lazy-b-routing.module';
import { LazyBComponent } from './lazy-b.component';
import { LibraryBModule } from 'poc-lib';

@NgModule({
  declarations: [LazyBComponent],
  imports: [CommonModule, LazyBRoutingModule, LibraryBModule],
})
export class LazyBModule {}
