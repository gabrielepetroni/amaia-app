import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { DataService } from '../services/data.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-lostpassword',
  templateUrl: './lostpassword.component.html',
  styleUrl: './lostpassword.component.scss'
})
export class LostpasswordComponent {
  form: FormGroup;
  submitted = false;
  
  http = inject(HttpClient) 
  authService = inject(AuthService)
  router = inject(Router)

  constructor(private formBuilder: FormBuilder, public dataService: DataService, private toastrService: NbToastrService) { }
  
  get f() { return this.form.controls; }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      email2: ["", [RegisterComponent.matchValues('email'), Validators.required, Validators.email]]})
      
      this.form.controls['email'].valueChanges.subscribe(() => {
        this.form.controls['email2'].updateValueAndValidity();
      });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }
    this.authService.sendPasswordResetEmails(this.form.value['email']);
  }

}
