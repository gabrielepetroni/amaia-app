import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})


export class RegisterComponent implements OnInit{

  form: FormGroup;
  submitted = false;
  
  http = inject(HttpClient) 
  authService = inject(AuthService)
  router = inject(Router)

  constructor(private formBuilder: FormBuilder) { }
  
  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ["", Validators.max(30)],
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

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n');
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }


  public static matchValues(
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
 
/*
  onSubmit(): void {
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe(() => 
    this.router.navigateByUrl('/'))
*/
}
