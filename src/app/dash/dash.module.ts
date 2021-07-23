import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { NewsComponent } from './news/news.component';
import { AlgoritmoComponent } from './algoritmo/algoritmo.component';


@NgModule({
  declarations: [NewsComponent, AlgoritmoComponent],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashModule { }
