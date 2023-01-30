import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alerte1Page } from './alerte1.page';

const routes: Routes = [
  {
    path: '',
    component: Alerte1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alerte1PageRoutingModule {}
