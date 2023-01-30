import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegumeFruitService {

  api= "http://localhost:8080/api/legumefruit";

  constructor(private http : HttpClient) { }

  //AFFICHAGE DES LEGUMES ET FRUITS
  getLegume():Observable<any>{
    return this.http.get(`${this.api}/lireLegumes`);
  }

   //RECUPERATION DE L'ID DU LEGUMES 
   recupererIdLegumeFruit(id:number):Observable<any>{
    return this.http.get(`${this.api}/RecupererIdLegumeFruit/${id}`);
  }
}
