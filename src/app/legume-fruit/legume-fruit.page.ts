import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-legume-fruit',
  templateUrl: './legume-fruit.page.html',
  styleUrls: ['./legume-fruit.page.scss'],
})
export class LegumeFruitPage implements OnInit {
  valueSelected:any='Description'

  Legume : any
  id: any
  constructor(private route : ActivatedRoute, private legumeFruitService : LegumeFruitService) { }

  ngOnInit() {
   //RECUPERER L'ID DU LEGUME
   this.id= this.route.snapshot.params["id"]
   this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data=>{
    this.Legume = data;
    console.log(this.Legume)
   })
  }
  
  segmentChanged(event:any){
    this.valueSelected = event.target.value;
  }

}
