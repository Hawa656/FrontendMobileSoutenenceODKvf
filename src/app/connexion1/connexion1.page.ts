import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-connexion1',
  templateUrl: './connexion1.page.html',
  styleUrls: ['./connexion1.page.scss'],
})
export class Connexion1Page implements OnInit {
  form: any = {
    numeroOrEmail: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private route : Router) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      //RECUPERATION DU ROLE DE L'UTILISATEUR CONNECTE
      this.roles = this.storageService.getUser().roles;
    }
  }
//METHODE PERMETTANT DE SE CONNECTER 
Connexion(): void {
    const { numeroOrEmail, password } = this.form;

    this.authService.login(numeroOrEmail, password).subscribe({
      next: data => {
        location.reload();
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;

       
        // POUR REDIRIGER VERS LA PAGE D4ACCUEIL UNE FOIS CONNECTE
        if(this.roles[0]=="ROLE_USER"||this.roles[0]=="ROLE_ADMIN"){
          this.route.navigate(['/tabs/accueil'])
        }
        if (this.roles[0]=="ROLE_ADMIN") {
           console.log('veuillez créer un compte utilisateur');
          //  Swal.fire({  
          //   icon: 'error',  
          //   title: 'Oops...',  
          //   text: 'Something went wrong!',  
          // })  
           
        }
         
        
        
        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
