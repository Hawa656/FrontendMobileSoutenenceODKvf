import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {
  Legume1:any
  Legume : any
  // Fruit : any
  idLegumesFruits:any
  id: any
  video: any;
  etape1: any;
  etape2: any;
  etape3: any;
  etape4: any;

  constructor(private route : ActivatedRoute,private legumeFruitService : LegumeFruitService) { }

  ngOnInit() {
    //RECUPERER L'ID DU LEGUME
    this.id= this.route.snapshot.params["id"]

    console.log("ID = "+this.id)


    this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data=>{
     // console.log(this.Legume)
     this.Legume = data;
    this.etape1 = this.Legume.tutoriels.etape1;
    this.etape2 = this.Legume.tutoriels.etape2;
    this.etape3 = this.Legume.tutoriels.etape3;
    this.etape4 = this.Legume.tutoriels.etape4;
    })
 
    //RECUPERER Autre methode
    this.idLegumesFruits= this.route.snapshot.params["idLegumesFruits"]
    this.legumeFruitService.getTousLesInfoSurUnLegumeFruit(this.id).subscribe(data=>{
     this.Legume1 = data;
     this.video = data.video;
     console.log(this.Legume1)
    })
   }
}
