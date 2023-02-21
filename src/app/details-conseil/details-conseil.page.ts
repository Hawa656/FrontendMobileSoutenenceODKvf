import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConseilsService } from '../_services/conseils.service';

@Component({
  selector: 'app-details-conseil',
  templateUrl: './details-conseil.page.html',
  styleUrls: ['./details-conseil.page.scss'],
})
export class DetailsConseilPage implements OnInit {
  Conseil:any
  idConseil:any
  searchText:any;

  constructor(private route : ActivatedRoute, private conseilService: ConseilsService,private route1 : Router) { }

  ngOnInit() {
    this.idConseil= this.route.snapshot.params["id"]
   this.conseilService.recupererIdConseil(this.idConseil).subscribe(data=>{
    // console.log(this.Legume)
    this.Conseil = data;

  })
}

//METHODE PERMETTANT DE REVENIR A LA PAGE PRECEDENTE
back(): void {
  window.history.back()
}
  
}
