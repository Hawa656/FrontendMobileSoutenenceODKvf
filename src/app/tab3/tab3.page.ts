import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page  implements OnInit{
  form: any = {
    nom: null,
    prenom:null,
    numero:null,
    email: null,
    // password: null,
    // confirmPassword:null
  };

  User:any

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private userService: UserService, private storageService: StorageService) {}


  ngOnInit() {
    //RECUPERATION DU ROLE DE L'UTILISATEUR CONNECTE
    this.User = this.storageService.getUser();
  }

  onSubmit(): void {
    const { nom,prenom,numero, email} = this.form;
    this.userService.modifieruser(nom,prenom, numero, email, this.User.id).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }


 
}
