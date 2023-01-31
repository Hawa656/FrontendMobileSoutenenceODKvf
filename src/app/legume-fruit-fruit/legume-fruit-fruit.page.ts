import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-legume-fruit-fruit',
  templateUrl: './legume-fruit-fruit.page.html',
  styleUrls: ['./legume-fruit-fruit.page.scss'],
})
export class LegumeFruitFruitPage implements OnInit {
  valueSelected:any='Description'


  Fruit : any
  id: any
  constructor(private route : ActivatedRoute, private legumeFruitService : LegumeFruitService) { }

  ngOnInit() {
   //RECUPERER L'ID DU LEGUMEFRUIT
   this.id= this.route.snapshot.params["id"]
   this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data=>{
    this.Fruit = data;
    console.log(this.Fruit)
   })
  }
  
  segmentChanged(event:any){
    this.valueSelected = event.target.value;
  }

}
