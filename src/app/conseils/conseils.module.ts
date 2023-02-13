import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConseilsPageRoutingModule } from './conseils-routing.module';

import { ConseilsPage } from './conseils.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConseilsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ConseilsPage]
})
export class ConseilsPageModule {}
