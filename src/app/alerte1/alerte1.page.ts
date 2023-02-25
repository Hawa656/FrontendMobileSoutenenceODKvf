import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-alerte1',
  templateUrl: './alerte1.page.html',
  styleUrls: ['./alerte1.page.scss'],
})
export class Alerte1Page implements OnInit {
  notification:any
  
  User: any
  idUser:any
  tache:any
  id:any

  constructor(private userService:UserService, private storageService: StorageService) { }

  ngOnInit() {
     this.User=this.storageService.getUser()

    // this.userService.getNotification(this.User.id).subscribe(data => {
      // console.log('xccccccccccccc'+this.User.id)
      // this.notification = data;
      // console.log('question' + this.notification)
    //  })
    console.log('hhhhhhhhhhhhh'+this.User.id)
    this.userService.getTache(this.User.id).subscribe(data => {
      
      this.tache = data;
       console.log(this.tache)
      //  this.tache = data;
       
      })
  
  }
  }

//   getNotif(): void 
//   {

    

// }
