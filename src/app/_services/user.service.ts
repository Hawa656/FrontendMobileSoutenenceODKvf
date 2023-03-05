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
  api= "http://localhost:8080/api/tache";

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

  // AJOUTER UNE TACHE
  PostTache(donnee: any, id:any):Observable<any> {
    let data = new FormData();
    // data.append("titre",titre);
    // data.append("date",date);
    // data.append("nbreJour",nbreJour);
    console.log(id)
    return this.http.post(`http://localhost:8080/api/tache/ajouttache/${id}`,donnee)
  }

  // LISTE NOTIFICATION DE USER CONNECTER
  getNotification(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/notification/lireNotifUserConecter/${id}`)
  }

  // LISTE Tache DE USER CONNECTER
  getTache(idUser:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/tache/lireTaheUserConecter/${idUser}`)
  }
  
   //SUPPRIMER Tache
  //  supprimerTache(id_Tache:number):Observable<any>{
  //   console.log("",id_Tache)
  //   return this.http.delete(`http://localhost:8080/api/tache/supprimerTache/${id_Tache}`);
  // }

  supprimerTache(id_Tache: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/taches/${id_Tache}`);
  }
  
}