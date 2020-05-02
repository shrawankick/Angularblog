import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
   
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';   
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    ,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
