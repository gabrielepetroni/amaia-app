import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbCardModule, NbIconModule, NbThemeModule } from '@nebular/theme';

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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LostpasswordComponent,
    InstallAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbInputModule,
    NbFormFieldModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"amaia-ia","appId":"1:656231601276:web:3d5bed006a2b3d1140e5f9","storageBucket":"amaia-ia.appspot.com","apiKey":"AIzaSyATgAwX_HoHFMMCkmU6Q4cfPJ1nAvtwh3Q","authDomain":"amaia-ia.firebaseapp.com","messagingSenderId":"656231601276","measurementId":"G-DQYG0G8Q8Q"})),
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
  providers: [NbLayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
