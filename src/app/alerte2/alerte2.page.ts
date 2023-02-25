import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-alerte2',
  templateUrl: './alerte2.page.html',
  styleUrls: ['./alerte2.page.scss'],
})
export class Alerte2Page implements OnInit {

  User:any
  id:any
  form: any = {
    titre: null,
    dateAcitivte:null,
    heureNotif:null
    
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor( private serviceStorage : StorageService, private userService: UserService) { }

  ngOnInit() {
    this.User = this.serviceStorage.getUser();
  }

  onSubmit(): void {
    const { titre,dateAcitivte,heureNotif} = this.form;
    console.log('titre'+titre)
    console.log('date'+dateAcitivte)
    console.log('date'+heureNotif)
    this.userService.PostTache(this.form, this.User.id).subscribe({
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

  //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }
}
