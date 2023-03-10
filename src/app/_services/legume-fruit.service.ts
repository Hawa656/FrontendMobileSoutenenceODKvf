import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegumeFruitService {

  api= "http://localhost:8080/api/legumefruit";
  api1= "http://localhost:8080/api/video";

  constructor(private http : HttpClient) { }

  //AFFICHAGE DES LEGUMES 
  getLegume():Observable<any>{
    return this.http.get(`${this.api}/lireLegumes`);
  }

  //AFFICHAGE DES FRUITS
  getEtapesParTuto(tutoriels:any):Observable<any>{
    return this.http.get(`http://localhost:8080/api/etape/etapesParTuto/${tutoriels}`)
  }

  //AFFICHAGE DES FRUITS
  getFruit():Observable<any>{
    return this.http.get(`http://localhost:8080/api/legumefruit/lireFruits`)
  }

  //AFFICHER TOUS LES ETAPES D4UN LEGUME FRUIT
  getEtapeLegumeFruit():Observable<any>{
    return this.http.get(`${this.api}/lireFruits`)
  }

  //AFFICHE (la video de la page legumeFruit) LES INFO SUR LEGUMESFRUITS, VIDEO ,TUTORIELS
  getTousLesInfoSurUnLegumeFruit(idLegumesFruits:any):Observable<any>{
    return this.http.get(`${this.api1}/videoparIdLegumeFruit/${idLegumesFruits}`);
  }


   //RECUPERATION DE L'ID DU LEGUMES 
   recupererIdLegumeFruit(id:number):Observable<any>{
    return this.http.get(`${this.api}/RecupererIdLegumeFruit/${id}`);
  }

}
