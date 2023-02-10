import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { StorageService } from './storage.service';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  //==============ngIF cacher profil===============
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  //==============ngIF cacher profil===============
  user: any;
  constructor(private platform: Platform,private router:Router,private userService:StorageService,private authService: AuthService,private routeDeconnexion : Router) {
  
    this.initializeApp();
  }

  initializeAp() {
    this.platform.ready().then(() => {
      (window as any).navigator.splashscreen.hide();
    });
  }

  ngOnInit(): void {

    this.user = this.userService.isLoggedIn();

    if (this.user == true) {
      this.router.navigateByUrl("/tabs/accueil")
    } else {
      this.initializeApp();
    }
        
    
    
// =========================================
// ===================Deconnexion===============
  }


  deconnexion(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.userService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }
// ========================================
  initializeApp(){
  this.router.navigateByUrl("connexion1")
}
// initializeApp(){
//   this.router.navigateByUrl("test")
// }


  
}




