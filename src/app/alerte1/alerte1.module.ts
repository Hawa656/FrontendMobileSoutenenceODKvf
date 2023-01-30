import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Alerte1PageRoutingModule } from './alerte1-routing.module';

import { Alerte1Page } from './alerte1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Alerte1PageRoutingModule
  ],
  declarations: [Alerte1Page]
})
export class Alerte1PageModule {}
