import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgoritmoComponent } from './algoritmo/algoritmo.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [{
    path:'',
    children:[
      {path:'news', component:NewsComponent},
      {path:'exe2', component:AlgoritmoComponent},
      {path:'**', redirectTo:'news'}
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
