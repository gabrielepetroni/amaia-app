import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-install-app',
  templateUrl: './install-app.component.html',
  styleUrl: './install-app.component.scss'
})
export class InstallAppComponent {
  isMobile(): boolean {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }

  constructor(private router: Router) 
  {
      if (this.isMobile()) {
        this.router.navigateByUrl('/login')
      } 
    }

}

