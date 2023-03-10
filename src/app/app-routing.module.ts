import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion1',
    loadChildren: () => import('./connexion1/connexion1.module').then( m => m.Connexion1PageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'legumes',
    loadChildren: () => import('./legumes/legumes.module').then( m => m.LegumesPageModule)
  },
  {
    path: 'fruits',
    loadChildren: () => import('./fruits/fruits.module').then( m => m.FruitsPageModule)
  },
  {
    path: 'conseils',
    loadChildren: () => import('./conseils/conseils.module').then( m => m.ConseilsPageModule)
  },
  {
    path: 'details-conseil',
    loadChildren: () => import('./details-conseil/details-conseil.module').then( m => m.DetailsConseilPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./videos/videos.module').then( m => m.VideosPageModule)
  },
  {
    path: 'legume-fruit',
    loadChildren: () => import('./legume-fruit/legume-fruit.module').then( m => m.LegumeFruitPageModule)
  },
  {
    path: 'alerte1',
    loadChildren: () => import('./alerte1/alerte1.module').then( m => m.Alerte1PageModule)
  },
  {
    path: 'alerte2',
    loadChildren: () => import('./alerte2/alerte2.module').then( m => m.Alerte2PageModule)
  },
  {
    path: 'legume-fruit-fruit',
    loadChildren: () => import('./legume-fruit-fruit/legume-fruit-fruit.module').then( m => m.LegumeFruitFruitPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
  {
    path: 'splash-screenn',
    loadChildren: () => import('./splash-screenn/splash-screenn.module').then( m => m.SplashScreennPageModule)
  },
  {
    path: 'test/:id',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'forum-detail',
    loadChildren: () => import('./forum-detail/forum-detail.module').then( m => m.ForumDetailPageModule)
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'forget-motde-passe',
    loadChildren: () => import('./forget-motde-passe/forget-motde-passe.module').then( m => m.ForgetMotdePassePageModule)
  },
  {
    path: 'testfruit/:id',
    loadChildren: () => import('./testfruit/testfruit.module').then( m => m.TestfruitPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
