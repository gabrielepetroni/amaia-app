import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  http = inject(HttpClient)
  authService = inject(AuthService)
  router = inject(Router)

 
/*
  onSubmit(): void {
    this.authService.register(rawForm.email, rawForm.username, rawForm.password).subscribe(() => 
    this.router.navigateByUrl('/'))
*/
}
