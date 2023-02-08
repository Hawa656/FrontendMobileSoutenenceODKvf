import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashScreennPageRoutingModule } from './splash-screenn-routing.module';

import { SplashScreennPage } from './splash-screenn.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashScreennPageRoutingModule
  ],
  declarations: [SplashScreennPage]
})
export class SplashScreennPageModule {}
