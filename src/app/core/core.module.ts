import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandler } from './global-error-handler.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule.forRoot()
  ],
  declarations: [
    HomeComponent,
    NavMenuComponent,
    FooterComponent,
    ErrorComponent
  ],
  exports: [
    NavMenuComponent,
    FooterComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler }
  ]
})
export class CoreModule { }
