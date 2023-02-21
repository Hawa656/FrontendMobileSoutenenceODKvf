import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetMotdePassePageRoutingModule } from './forget-motde-passe-routing.module';

import { ForgetMotdePassePage } from './forget-motde-passe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetMotdePassePageRoutingModule
  ],
  declarations: [ForgetMotdePassePage]
})
export class ForgetMotdePassePageModule {}
