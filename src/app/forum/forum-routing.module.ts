import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForumPage } from './forum.page';

const routes: Routes = [
  {
    path: '',
    component: ForumPage
  },
  {
    path: 'forum-detail/:id',
    loadChildren: () => import('../forum-detail/forum-detail.module').then( m => m.ForumDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForumPageRoutingModule {}
