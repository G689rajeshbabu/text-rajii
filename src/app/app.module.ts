import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServiesComponent } from './servies/servies.component';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';
import { MapComponent } from './map/map.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HttpClient } from 'selenium-webdriver/http';
import { ReactFromComponent } from './react-from/react-from.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiesComponent,
    SingupComponent,
    SinginComponent,
    MapComponent,
    ContactusComponent,
    ReactFromComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
