import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// StorageServicegère les informations utilisateur 
//  dans le stockage de session du navigateur.
//   Pour la déconnexion, nous effacerons ce stockage de session.

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private router:Router) {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;

    }

    return false;
    
  }
}