import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetMotdePassePage } from './forget-motde-passe.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetMotdePassePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetMotdePassePageRoutingModule {}
