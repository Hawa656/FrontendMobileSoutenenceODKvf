import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alerte2PageRoutingModule } from './alerte2-routing.module';

import { Alerte2Page } from './alerte2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alerte2PageRoutingModule
  ],
  declarations: [Alerte2Page]
})
export class Alerte2PageModule {}
