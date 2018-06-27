import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { TdFormComponent } from './td-form/td-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CompareValidatorDirective,
    TdFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
