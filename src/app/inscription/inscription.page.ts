import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  form: any = {
    nom: null,
    prenom:null,
    numero:null,
    email: null,
    password: null,
    confirmPassword:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const { nom,prenom,numero, email, password,confirmPassword } = this.form;
    this.authService.register(nom,prenom, numero, email, password, confirmPassword).subscribe({
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
