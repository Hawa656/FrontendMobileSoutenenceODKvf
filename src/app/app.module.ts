import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { StorageService } from './_services/storage.service';
import { UserService } from './_services/user.service';
import { AuthService } from './_services/auth.service';


@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,HttpClientModule,Ng2SearchPipeModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {
 
  firstName: string;
  lastName: string;

  constructor(private storageService: StorageService) {
    const user = this.storageService.getUser();
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }

}




