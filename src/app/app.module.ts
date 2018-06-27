import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompareValidatorDirective } from './shared/compare-validator.directive';
import { TdFormComponent } from './td-form/td-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { UniqueEmailValidatorDirective } from './shared/unique-email-validator.directive';
import { UniqueUsernameValidatorDirective } from './shared/unique-username-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompareValidatorDirective,
    TdFormComponent,
    ReactiveFormComponent,
    UniqueEmailValidatorDirective,
    UniqueUsernameValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
