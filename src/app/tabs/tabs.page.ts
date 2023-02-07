import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {
  //==============ngIF cacher profil===============
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private storageService: StorageService) {
  //==============ngIF cacher profil===============
  }
  ngOnInit(): void {
    //==============ngIF cacher profil===============
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      //RECUPERATION DU ROLE DE L'UTILISATEUR CONNECTE
      this.roles = this.storageService.getUser().roles;
    }
    //==============ngIF cacher profil===============
  }
  
  
  
 
}
