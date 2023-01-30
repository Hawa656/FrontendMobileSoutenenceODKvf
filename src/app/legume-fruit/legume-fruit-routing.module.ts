import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegumeFruitPage } from './legume-fruit.page';

const routes: Routes = [
  {
    path: '',
    component: LegumeFruitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegumeFruitPageRoutingModule {}
