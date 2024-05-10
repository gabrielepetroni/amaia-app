import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InstallAppComponent } from './install-app/install-app.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LostpasswordComponent } from './lostpassword/lostpassword.component';
import { AuthGuard } from './guard/auth.guard';
import { UserComponent } from './user/user.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'install-app', component: InstallAppComponent},
  {path: 'lostpassword', component: LostpasswordComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'info', component: InfoComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
