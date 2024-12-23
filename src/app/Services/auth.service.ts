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


  constructor() {}

  login(email: string, password : string): void {
    const user: User = { email,password};
    this.userSubject.next(user);
  }

  logout(): void {
    this.userSubject.next(null);
  }


}
