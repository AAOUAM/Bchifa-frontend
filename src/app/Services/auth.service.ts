import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';


interface User {
  email: string;
  password : string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();


  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  login(email: string, password : string): void {
    const user: User = { email,password};
    this.userSubject.next(user);
  }


  private currentUser: { role: string };  // Example user object, you can get it from your API or session



  getCurrentUser() {
    return this.currentUser;  // Return the current logged-in user
  }

  setCurrentUser(user: { role: string }) {
    this.currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }


}
