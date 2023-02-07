import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  api= "http://localhost:8080/api/video";

  constructor(private http : HttpClient) { }
// ==========================FILTRAGE==============================
  //FILTRAGE DES VIDEOS PAR FRUITS ET LEGUMES
  getFiltrerParFruitEtLegume(aba:any):Observable<any>{
    return this.http.get(`${this.api}/listeVideoLegume/${aba}`);
  }
// ==========================END FILTRAGE==============================


  //AFFICHAGE DES VIDEOS 
  getVideo():Observable<any>{
    return this.http.get(`${this.api}/lireVideo`);
  }


}
