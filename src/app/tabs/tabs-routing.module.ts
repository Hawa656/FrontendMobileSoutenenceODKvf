import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then( m => m.AccueilPageModule)
      },
      {
        path: 'legumes',
        loadChildren: () => import('../legumes/legumes.module').then( m => m.LegumesPageModule)
      },
      {
        path: 'fruits',
        loadChildren: () => import('../fruits/fruits.module').then( m => m.FruitsPageModule)
      },
      {
        path: 'conseils',
        loadChildren: () => import('../conseils/conseils.module').then( m => m.ConseilsPageModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('../videos/videos.module').then( m => m.VideosPageModule)
      },
      {
        path: 'alerte1',
        loadChildren: () => import('../alerte1/alerte1.module').then( m => m.Alerte1PageModule)
      },
      {
        path: 'alerte2',
        loadChildren: () => import('../alerte2/alerte2.module').then( m => m.Alerte2PageModule)
      },
      {
        path: 'legume-fruit/:id',
        loadChildren: () => import('../legume-fruit/legume-fruit.module').then( m => m.LegumeFruitPageModule)
      },
      {
        path: 'legume-fruit-fruit/:id',
        loadChildren: () => import('../legume-fruit-fruit/legume-fruit-fruit.module').then( m => m.LegumeFruitFruitPageModule)
      },
      {
        path: 'details-conseil/:id',
        loadChildren: () => import('../details-conseil/details-conseil.module').then( m => m.DetailsConseilPageModule)
      },
      {
        path: 'forum',
        loadChildren: () => import('../forum/forum.module').then( m => m.ForumPageModule)
      },
      {
        path: 'forum-detail',
        loadChildren: () => import('../forum-detail/forum-detail.module').then( m => m.ForumDetailPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      }
      // {
      //   path: '',
      //   redirectTo: '/tabs/tab1',
      //   pathMatch: 'full'
      // }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/tab1',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
