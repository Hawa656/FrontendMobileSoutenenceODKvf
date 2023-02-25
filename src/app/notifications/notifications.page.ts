import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {
  notification:any
  id:any
  User: any
  nombrenotif:number=0;

  constructor(private storageService: StorageService,private userService:UserService) { }

  ngOnInit() {
     this.User=this.storageService.getUser()
     console.log('xccccccccccccc '+this.User.id)

     this.userService.getNotification(this.User.id).subscribe(data => {
      this.nombrenotif = data.length;
       console.log(this.nombrenotif)
      console.log('xccccccccccccc'+data)
       this.notification = data;
       
      })
  }

}
