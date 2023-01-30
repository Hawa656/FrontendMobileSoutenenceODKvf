import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alerte2Page } from './alerte2.page';

const routes: Routes = [
  {
    path: '',
    component: Alerte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alerte2PageRoutingModule {}
