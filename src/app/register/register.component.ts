import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})


export class RegisterComponent implements OnInit{

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, public dataService: DataService, public authService: AuthService, public router: Router) { }
  
  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ["", Validators.max(50)],
      email: ["", Validators.email],
      pwd: ["", [Validators.required, Validators.minLength(10)]],
      pwd2: ["", [RegisterComponent.matchValues('pwd'),Validators.required]],
      code: ["", [Validators.required]]})
      
      this.form.controls['pwd'].valueChanges.subscribe(() => {
        this.form.controls['pwd2'].updateValueAndValidity();
      });
  }

  

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this.authService.Register(this.form.value['email'], this.form.value['username'], this.form.value['pwd'], this.form.value['code']);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  public static matchValues
  (
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
        !!control.parent.value &&
        control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

}
