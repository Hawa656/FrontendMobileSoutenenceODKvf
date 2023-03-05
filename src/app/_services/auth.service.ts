import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

// Ce service envoie des requêtes HTTP POST d'enregistrement,
//  de connexion et de déconnexion au back-end.

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api= "http://localhost:8080/api/auth";
  constructor(private http: HttpClient) {}
// +++++++++++++++++CONNEXION+++++++++++++++++++++++
  login(numeroOrEmail: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        numeroOrEmail,
        password,
      },
      httpOptions
    );
  }
// +++++++++++++++++CREATION DE COMPTE+++++++++++++++++++++++
  register(nom: string, prenom: string, numero: string, email: string, password: string, confirmPassword: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        "email":email,
        "password":password,
         "numero":numero,
         "confirmpassword":confirmPassword,
         "nom":nom,
         "prenom":prenom
    },
      httpOptions
    );
  }

  

  //RECUPERATION DE L'ID DU LEGUMES 
  recupererIdLegumeFruit(id:number):Observable<any>{
    return this.http.get(`${this.api}/RecupererIdUser/${id}`);
  }
    //Deconnexion
    logout(): Observable<any> {
      const req = new HttpRequest('POST', AUTH_API + 'signout', {}, httpOptions);
      return this.http.request(req);
    }


    // ++++++++++++++++MOT DE PASSE OUBLIER? REINITIALISER PASSWORD+++++++++++++++++++++++
    resetPassword( email: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'resetPassword/' + `${email}`,
      {
        "email":email,
    },
      httpOptions
    );
  }

  // ++++++++++++++++CHANGER MOT DE PASSE  PASSWORD+++++++++++++++++++++++
  changePassword(emailOrNumero: string, currentpassword: string, newpassword: string, confirmpassword: string): Observable<any> {
    const data = {
      emailOrNumero: emailOrNumero,
      currentpassword: currentpassword,
      newpassword: newpassword,
      confirmpassword: confirmpassword
    };
    return this.http.post('http://localhost:8080/api/auth/changePassword', data);
  }
  

}

 