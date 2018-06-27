import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TdFormComponent } from './td-form/td-form.component';

const routes: Routes = [
  { path: '', component: TdFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
