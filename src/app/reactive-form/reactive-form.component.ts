import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { compareValidator } from '../shared/compare-validator.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      email: ['', Validators.required],
      emailConfirm: ['', [Validators.required, compareValidator('email')]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, compareValidator('password')]]
    });
  }

  get email() {
    return this.reactiveForm.get('email');
  }

  get emailConfirm() {
    return this.reactiveForm.get('emailConfirm');
  }

  get password() {
    return this.reactiveForm.get('password');
  }

  get pwConfirm() {
    return this.reactiveForm.get('passwordConfirm');
  }

}
