import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashScreennPage } from './splash-screenn.page';

const routes: Routes = [
  {
    path: '',
    component: SplashScreennPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashScreennPageRoutingModule {}
