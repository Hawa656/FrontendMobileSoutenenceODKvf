import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  emailOrNumero:any
  currentpassword:any
  newpassword:any
  confirmpassword:any
  message:any

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  changePassword() {
    this.authService.changePassword(this.emailOrNumero, this.currentpassword, this.newpassword, this.confirmpassword).subscribe(response => {
      console.log(response);
      // Affichez le message de retour sur votre page HTML en utilisant une variable
      this.message = response;
    }, error => {
      console.log(error);
    });
  }
  

  //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }
}
