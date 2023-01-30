import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { StorageService } from './storage.service';
import { StorageService } from './_services/storage.service';
import { AuthService } from './_services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  user: any;
  constructor(private router:Router,private userService:StorageService,private authService: AuthService,private routeDeconnexion : Router) {
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
  deconnexion() {
    this.authService.logout()
window.location.reload()
    this.routeDeconnexion.navigate(['/connexion1'])
  }
// ========================================
  initializeApp(){
  this.router.navigateByUrl("connexion1")
}
}



