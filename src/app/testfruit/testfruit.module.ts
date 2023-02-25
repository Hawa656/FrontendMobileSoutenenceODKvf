import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestfruitPageRoutingModule } from './testfruit-routing.module';

import { TestfruitPage } from './testfruit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestfruitPageRoutingModule
  ],
  declarations: [TestfruitPage]
})
export class TestfruitPageModule {}
