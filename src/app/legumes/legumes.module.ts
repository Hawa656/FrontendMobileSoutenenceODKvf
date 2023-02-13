import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegumesPageRoutingModule } from './legumes-routing.module';

import { LegumesPage } from './legumes.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegumesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [LegumesPage]
})
export class LegumesPageModule {}
