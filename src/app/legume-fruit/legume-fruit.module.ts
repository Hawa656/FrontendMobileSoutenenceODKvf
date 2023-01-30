import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegumeFruitPageRoutingModule } from './legume-fruit-routing.module';

import { LegumeFruitPage } from './legume-fruit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegumeFruitPageRoutingModule
  ],
  declarations: [LegumeFruitPage]
})
export class LegumeFruitPageModule {}
