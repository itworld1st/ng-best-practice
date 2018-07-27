import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
