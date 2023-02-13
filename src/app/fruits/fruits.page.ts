import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {
  fruit: any
  // pour la barre de recherche:
  searchText:any;

  constructor(private legumeFruitService: LegumeFruitService, private route: Router) { }

  ngOnInit() {
    //AFFICHER LES  FRUITS
    this.legumeFruitService.getFruit().subscribe(data=>{
      this.fruit = data;
      console.log("  )))))))))))))))) " + this.fruit)
      console.log("  )))))))))))))))) " + this.fruit.titre)
    })
  }

  //LA METHODE PERMETTANT DE NAVIGER VERS LA PAGE DU DETAILS FRUIT
  goToDetailFruit(id:number){
    return this.route.navigate(['/tabs/legume-fruit-fruit', id])
  }

   

}
