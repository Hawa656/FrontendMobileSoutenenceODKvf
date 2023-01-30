import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsConseilPageRoutingModule } from './details-conseil-routing.module';

import { DetailsConseilPage } from './details-conseil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsConseilPageRoutingModule
  ],
  declarations: [DetailsConseilPage]
})
export class DetailsConseilPageModule {}
