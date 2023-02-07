import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private http: HttpClient) { }

  // +++++++++++++++++MODIFIER UN UTILISATEUR+++++++++++++++++++++++
  modifieruser(nom: string, prenom: string, numero: string, email: string, id:any): Observable<any> {
    return this.http.put(
      AUTH_API + 'user/' + `${id}`,
      {
        "email":email,
         "numero":numero,
         "nom":nom,
         "prenom":prenom,
         "id":id
    },
      httpOptions
    );
  }
}