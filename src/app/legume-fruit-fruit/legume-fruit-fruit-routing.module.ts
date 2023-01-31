import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegumeFruitFruitPage } from './legume-fruit-fruit.page';

const routes: Routes = [
  {
    path: '',
    component: LegumeFruitFruitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegumeFruitFruitPageRoutingModule {}
