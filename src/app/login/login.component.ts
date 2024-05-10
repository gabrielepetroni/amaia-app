import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbInputModule } from '@nebular/theme';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  form: FormGroup;
  submitted = false;

  
  isMobile(): boolean {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  get f() { return this.form.controls; }

  constructor(private router: Router, private formBuilder: FormBuilder, public authService: AuthService) 
  {
      if (!this.isMobile()) {
        this.router.navigateByUrl('/install-app')
      }
  }

  ngOnInit(): void {

    if (this.authService.isLoggedIn) {
      this.router.navigateByUrl('/home')
    }
    
    this.form = this.formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      pwd: ["", [Validators.required, Validators.minLength(10)]]})
    }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
        return;
    }

    this.authService.Login(this.form.value['email'], this.form.value['pwd']);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }



  }



