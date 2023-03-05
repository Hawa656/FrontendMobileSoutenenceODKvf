import { Component, OnInit } from '@angular/core';
import { LegumeFruitService } from '../_services/legume-fruit.service';
import { StorageService } from '../_services/storage.service';
import { VideosService } from '../_services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  video : any
  qbq: any='fruit'
  AOUA:any;
  textFiltree:any
  selectedOption: any;
  // pour la barre de recherche:
  searchText:any;
  videoo: any;
  videoer: any;
  constructor(private videoService : VideosService,private storageService: StorageService, private legumeFruitService: LegumeFruitService) { }

  ngOnInit() {
         //AFFICHER LES VIDEOS
         this.videoService.getVideo().subscribe(data=>{
          this.videoer = data;
          // this.videoo = this.video.video;
          console.log("hgyuiijuvytftghibhyvtfyujniyyi",this.video)
        })
// ==========================FILTRAGE==============================
        //FILTRER LES VIDEOS PAR FRUITS OU LEGUMES
        this.videoService.getFiltrerParFruitEtLegume(this.qbq).subscribe(data=>{
          this.video = data;
          console.log(this.video)
        })
  }

  cangement(){
    console.log("ertyui"+this.textFiltree);
    this.videoService.getFiltrerParFruitEtLegume(this.textFiltree).subscribe(data=>{
      this.videoer = data;
      console.log("filtre")
      console.log(this.videoer)
  }
    )
  }
// ==========================FILTRAGE==============================


  // handleSelection(event:any) {
  //   this.selectedOption = event.target.innerText;
  //   console.log('sdxfcghb'+this.selectedOption)
  //   }

}
