import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alerte2PageRoutingModule } from './alerte2-routing.module';

import { Alerte2Page } from './alerte2.page';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alerte2PageRoutingModule,
    NgCalendarModule
  ],
  declarations: [Alerte2Page]
})
export class Alerte2PageModule {}
