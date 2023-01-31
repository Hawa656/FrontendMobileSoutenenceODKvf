import { Component, OnInit } from '@angular/core';
import { VideosService } from '../_services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {
  video : any

  constructor(private videoService : VideosService) { }

  ngOnInit() {
         //AFFICHER LES VIDEOS
         this.videoService.getVideo().subscribe(data=>{
          this.video = data;
          console.log(this.video)
        })
  }

}
