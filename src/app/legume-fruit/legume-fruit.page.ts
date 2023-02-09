import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { VideosService } from '../_services/videos.service';

@Component({
  selector: 'app-legume-fruit',
  templateUrl: './legume-fruit.page.html',
  styleUrls: ['./legume-fruit.page.scss'],
})
export class LegumeFruitPage implements OnInit {
  valueSelected:any='Description'
  Legume1:any
  Legume : any
  // Fruit : any
  idLegumesFruits:any
  id: any
  video: any;
  constructor(private route : ActivatedRoute, private legumeFruitService : LegumeFruitService,private videoService: VideosService) { }

  ngOnInit() {
   //RECUPERER L'ID DU LEGUME
   this.id= this.route.snapshot.params["id"]
   this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data=>{
    // console.log(this.Legume)
    this.Legume = data;

    console.log(" FFF "+this.Legume.photo)
   })

   //RECUPERER Autre methode
   this.idLegumesFruits= this.route.snapshot.params["idLegumesFruits"]
   this.legumeFruitService.getTousLesInfoSurUnLegumeFruit(this.id).subscribe(data=>{
    this.Legume1 = data;
    this.video = data.video;
    console.log(this.Legume1)
   })
  }
  
  segmentChanged(event:any){
    this.valueSelected = event.target.value;
  }

}
