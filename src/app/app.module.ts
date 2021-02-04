import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { StudenComponent } from './studen/studen.component';
import { HomeModule } from './home/home.module';
import {TeacherModule} from './teacher/teacher.module' 

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { StudenModule } from './studen/studen.module';
//firebase
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';




var firebaseConfig = {
  apiKey: "AIzaSyAMJBJBaHenCbPVZNtQR-AD6mhz29sZXOM",
  authDomain: "awaa-pro.firebaseapp.com",
  databaseURL: "https://awaa-pro.firebaseio.com/",
  projectId: "awaa-pro",
  storageBucket: "gs://awaa-pro.appspot.com/",
  messagingSenderId: "335446117868",
  appId: "1:335446117868:web:696b2d5185e65556fe44c9",
  measurementId: "G-5SRVDQXQTF"

  // apiKey: "AIzaSyA0ihvAIpsDIH5QAe8eLTrSJTIv8nHcwp4",
  // authDomain: "awa-com.firebaseapp.com",
  // databaseURL: "https://awa-com.firebaseio.com",
  // projectId: "awa-com",
  // storageBucket: "awa-com.appspot.com",
  // messagingSenderId: "685276484338",
  // appId: "1:685276484338:web:37d8e5d44d2331fe12f66b",
  // measurementId: "G-PK6DV7X5E9"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    //AngularFireModule.initializeApp({'apiKey':'AIzaSyA0ihvAIpsDIH5QAe8eLTrSJTIv8nHcwp4'}),
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFirestoreModule.enablePersistence(),
    AngularFireModule.initializeApp(firebaseConfig),
   // FormsModule,
    //ReactiveFormsModule,
    HomeModule,
    StudenModule, 
    TeacherModule,
    AppRoutingModule,
  //  AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireStorageModule,

  ],
  //providers: [AngularFirestore],
  bootstrap: [AppComponent],
  providers: [AngularFireAuth ,  AngularFirestore ] 
  
  
})
export class AppModule { }
