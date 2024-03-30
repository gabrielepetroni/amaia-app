import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule } from '@nebular/theme';

import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { HttpClientModule } from '@angular/common/http';

import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    provideFirebaseApp(() => initializeApp({"projectId":"amaia-ia","appId":"1:656231601276:web:3d5bed006a2b3d1140e5f9","storageBucket":"amaia-ia.appspot.com","apiKey":"AIzaSyATgAwX_HoHFMMCkmU6Q4cfPJ1nAvtwh3Q","authDomain":"amaia-ia.firebaseapp.com","messagingSenderId":"656231601276","measurementId":"G-DQYG0G8Q8Q"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }),
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
