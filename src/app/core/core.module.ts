import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    NavMenuComponent,
    FooterComponent
  ],
  exports: [
    NavMenuComponent,
    FooterComponent
  ]
})
export class CoreModule { }
