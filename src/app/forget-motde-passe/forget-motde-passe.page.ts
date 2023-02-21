import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-forget-motde-passe',
  templateUrl: './forget-motde-passe.page.html',
  styleUrls: ['./forget-motde-passe.page.scss'],
})
export class ForgetMotdePassePage implements OnInit {

  form: any = {
    email:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private route: Router) { }

  ngOnInit() {
  }

  onSubmit(): void{
    const {email} = this.form;
    this.authService.resetPassword(email).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        this.route.navigate(['/otp'])
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
      
    })

  }

  //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }
}
