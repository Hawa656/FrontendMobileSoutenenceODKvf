import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegumeFruitFruitPageRoutingModule } from './legume-fruit-fruit-routing.module';

import { LegumeFruitFruitPage } from './legume-fruit-fruit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegumeFruitFruitPageRoutingModule
  ],
  declarations: [LegumeFruitFruitPage]
})
export class LegumeFruitFruitPageModule {}
