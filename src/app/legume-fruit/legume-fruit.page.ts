import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { VideosService } from '../_services/videos.service';
// import { LegumesPage } from '../legumes/legumes.page';

@Component({
  selector: 'app-legume-fruit',
  templateUrl: './legume-fruit.page.html',
  styleUrls: ['./legume-fruit.page.scss'],
})
export class LegumeFruitPage implements OnInit {
  valueSelected:any='Description'
  Legume1:any
  Legume : any
  // pour la barre de recherche
  searchText:any;
  idLegumesFruits:any
  id: any
  video: any;
  constructor(private route : ActivatedRoute, private legumeFruitService : LegumeFruitService,private videoService: VideosService,private route1 : Router) { }

  ngOnInit() {
   //RECUPERER L'ID DU LEGUME
   this.id= this.route.snapshot.params["id"]
   this.legumeFruitService.recupererIdLegumeFruit(this.id).subscribe(data=>{
    // console.log(this.Legume)
    this.Legume = data;

    // console.log(" FFF "+this.Legume.photo)
   })

   //RECUPERER Autre methode recuperation viddeo
   this.idLegumesFruits= this.route.snapshot.params["idLegumesFruits"]
   this.legumeFruitService.getTousLesInfoSurUnLegumeFruit(this.id).subscribe(data=>{
    this.Legume1 = data;
    //this.video = data.video;
    console.log(this.Legume1)
   })
  }
  
  segmentChanged(event:any){
    this.valueSelected = event.target.value;
  }

   //LA METHODE PERMETTANT DE NAVIGER VERS LA PAGE DU DETAILS LEGUME
   goToDetailLegume(id:number){
     return this.route1.navigate(['/test',id])
   }

   //METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
  back(): void {
    window.history.back()
  }

}
