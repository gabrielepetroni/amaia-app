import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { NbInputModule } from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {

  isMobile(): boolean {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  constructor(private router: Router) 
  {
      if (!this.isMobile()) {
        this.router.navigateByUrl('/install-app')
      } 
    }

  }



