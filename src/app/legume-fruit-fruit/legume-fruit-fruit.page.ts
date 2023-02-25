import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { VideosService } from '../_services/videos.service';

@Component({
  selector: 'app-legume-fruit-fruit',
  templateUrl: './legume-fruit-fruit.page.html',
  styleUrls: ['./legume-fruit-fruit.page.scss'],
})
export class LegumeFruitFruitPage implements OnInit {
  valueSelected:any='Description'


  Fruit : any
  Fruit1:any
  etape:any
  id: any
  idLegumesFruits:any
  constructor(private route : ActivatedRoute, private legumeFruitService : LegumeFruitService,private videoService: VideosService,private route1 : Router) { }

  ngOnInit() {
   //RECUPERER L'ID DU LEGUMEFRUIT
   this.id= this.route.snapshot.params["id"]
   this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data=>{
    this.Fruit = data;
    console.log(this.Fruit)
   })

   //RECUPERER Autre methode recuperation viddeo
   this.idLegumesFruits= this.route.snapshot.params["idLegumesFruits"]
   this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data=>{
    this.Fruit1 = data;
    //this.video = data.video;
    console.log(this.Fruit1)
   })
  }
  
  segmentChanged(event:any){
    this.valueSelected = event.target.value;
  }

  //LA METHODE PERMETTANT DE NAVIGER VERS LA PAGE DU DETAILS LEGUME
  goToDetailLegume(id:number){
    return this.route1.navigate(['/testfruit',id])
  }

  //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }

  

}
