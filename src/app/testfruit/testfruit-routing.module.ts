import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestfruitPage } from './testfruit.page';

const routes: Routes = [
  {
    path: '',
    component: TestfruitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestfruitPageRoutingModule {}
