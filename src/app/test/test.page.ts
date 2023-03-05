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
  etape1:any
  
  idLegumesFruits:any
  id: any
  video: any;
  etape: any;
  

  constructor(private route : ActivatedRoute,private legumeFruitService : LegumeFruitService) { }

  ngOnInit() {
    //RECUPERER L'ID DU LEGUME
    this.id= this.route.snapshot.params["id"]

    console.log("ID = "+this.id)


    this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data=>{
     // console.log(this.Legume)
     this.Legume = data;
    this.etape = this.Legume.tutoriels.etape;
   
    })
 
    //RECUPERER Autre methode
    this.idLegumesFruits= this.route.snapshot.params["idLegumesFruits"]
    this.legumeFruitService.getEtapesParTuto(this.id).subscribe(data=>{
     this.Legume1 = data;
     this.video = data.video;
     console.log(this.Legume1)
    })
   }

   getEtapeTutoLegumeFruit(){
    this.legumeFruitService.getEtapeLegumeFruit().subscribe(data=>{
      this.etape = data.lenght;
      this.etape1 = data.lenght;
      console.log(this.Legume1)
     })
  }
    //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }
}
