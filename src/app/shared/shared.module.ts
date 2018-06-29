import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompareValidatorDirective } from './compare-validator.directive';
import { UniqueEmailValidatorDirective } from './unique-email-validator.directive';
import { UniqueUsernameValidatorDirective } from './unique-username-validator.directive';

@NgModule({
  imports: [],
  declarations: [
    CompareValidatorDirective,
    UniqueEmailValidatorDirective,
    UniqueUsernameValidatorDirective
  ],
  exports: [
    CommonModule,
    CompareValidatorDirective,
    UniqueEmailValidatorDirective,
    UniqueUsernameValidatorDirective
  ]
})
export class SharedModule { }
