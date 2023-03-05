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

  select : Date | undefined;

  onSubmit(): void {
    const { titre, dateAcitivte, heureNotif } = this.form;
    const tache = { titre, dateAcitivte, heureNotif }; // créer un objet avec les propriétés requises
    console.log(tache); // Vérifiez si l'objet est correctement créé dans la console

    this.userService.PostTache(tache, this.User.id).subscribe({
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

  rechargement(){
    this.ngOnInit()
  }

  //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }
}
