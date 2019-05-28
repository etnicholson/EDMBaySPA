import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataRetriverService } from './_services/data-retriver.service';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule,
      Ng2SearchPipeModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      DataRetriverService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
