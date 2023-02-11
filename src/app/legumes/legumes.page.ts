import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-legumes',
  templateUrl: './legumes.page.html',
  styleUrls: ['./legumes.page.scss'],
})
export class LegumesPage implements OnInit {

  legume : any
  constructor(private legumeFruitService: LegumeFruitService, private route : Router) { }

  ngOnInit() {
     //AFFICHER LES LEGUMES 
     this.legumeFruitService.getLegume().subscribe(data=>{
      this.legume = data;
      console.log(this.legume)
    })
  }

  //LA METHODE PERMETTANT DE NAVIGER VERS LA PAGE DU DETAILS LEGUME
  goToDetailLegume(id:number){
    return this.route.navigate(['/tabs/legume-fruit', id])
  }

}
