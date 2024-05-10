import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbAccordionComponent, NbAccordionModule, NbActionComponent, NbActionsModule, NbCardModule, NbChatModule, NbIconModule, NbThemeModule, NbUserModule } from '@nebular/theme';
import { NbToastrModule } from '@nebular/theme';

import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { NbInputModule} from '@nebular/theme';
import { NbFormFieldModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LostpasswordComponent } from './lostpassword/lostpassword.component';
import { InstallAppComponent } from './install-app/install-app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { UserComponent } from './user/user.component';

import { NgApexchartsModule } from "ng-apexcharts";
import { InfoComponent } from './info/info.component';
import { FB_API_KEY, FB_APP_ID, FB_MEASUREMENTE_ID, FB_MESSAGE_ID } from '../constants';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LostpasswordComponent,
    InstallAppComponent,
    HomeComponent,
    UserComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbInputModule,
    NbFormFieldModule,
    NbEvaIconsModule,
    NbIconModule,
    NbChatModule,
    NbAccordionModule,
    NbActionsModule,
    NgApexchartsModule,
    NbUserModule,
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"amaia-ia","appId":FB_APP_ID,"storageBucket":"amaia-ia.appspot.com","apiKey":FB_API_KEY,"authDomain":"amaia-ia.firebaseapp.com","messagingSenderId":FB_MESSAGE_ID,"measurementId":FB_MEASUREMENTE_ID})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [NbLayoutModule, AuthService, DataService, provideCharts(withDefaultRegisterables())],
  bootstrap: [AppComponent]
})
export class AppModule { }
