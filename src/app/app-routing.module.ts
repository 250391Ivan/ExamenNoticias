import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { DashModule } from './dash/dash.module';

const routes: Routes = [
  {
  path:'login',
  loadChildren:()=>import('./auth/auth.module').then(m=>AuthModule),
  },
  {
    path:'dash',
    loadChildren:()=>import('./dash/dash.module').then(m=>DashModule)
  },
  {
    path:'**',
    redirectTo:'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
