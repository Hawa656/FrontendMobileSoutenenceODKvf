import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private route:Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const { nom,prenom,numero, email, password,confirmPassword } = this.form;
    this.authService.register(nom,prenom, numero, email, password, confirmPassword).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        //==========1 FONCTION POUR PRENDRE UN PEU DE TEMPS AVANT D'ÊTRE REDIRIGER
        this.sleep(2000).then(() => {     
          // Call function after the sleep()
          console.log('Sleep function is working!') 
          this.route.navigate(['/connexion1'])}
          )
        //=========================================================
        
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
  // FONCTION POUR PRENDRE UN PEU DE TEMPS AVANT D'ÊTRE REDIRIGER
  sleep(duration:any) {   
    return new Promise((resolve) => setTimeout(resolve, duration)); 
  }   
   //================================
    
}
