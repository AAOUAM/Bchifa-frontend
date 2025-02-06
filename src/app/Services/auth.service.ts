import {Injectable, signal} from '@angular/core';
import {BehaviorSubject, Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';


interface User {
  email: string;
  password?: string;
  role?: string;
  token?: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {private userSubject = new BehaviorSubject<User | null>(null); // Manages the logged-in user state
  user$ = this.userSubject.asObservable(); // Exposed as an Observable for components to subscribe
  currentUserSig = signal<User | null>(null); // Signal to manage reactive user state

  private apiPatientUrl = 'http://localhost:8085/api/patient/auth'; // Adjusted backend URL
  private apiDoctorUrl = 'http://localhost:8085/api/doctor/auth'; // Adjusted backend URL

  private currentUser: User | null = null;

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
      this.userSubject.next(this.currentUser);
      this.currentUserSig.set(this.currentUser);
    }
  }


  registerPatient(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    gender: string,
    role: string,
    dateOfBirth: string ): Observable<void> {
    const payload = {
      firstName,
      lastName,
      email,
      password,
      gender,
      dateOfBirth,
      role

    };

    return this.http.post<void>(`${this.apiPatientUrl}/register`, payload).pipe(
      tap(() => console.log('Patient registered successfully')) // Debug log
    );

  }



  loginPatient(email: string, password: string): Observable<User> {
    const payload = { email, password };
    return this.http.post<User>(`${this.apiPatientUrl}/authenticate`, payload).pipe(
      tap((user) => this.handleSuccessfulLogin(user))
    );
  }



  registerDoctor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    inpe: number,
    description: string,
    specialty: string,
    telephone: string,
    langue: string,
    genreConsultation: string,
    prixConsultation: string,
    role :  string,
    latitude : number ,
    longitude : number ,
  ): Observable<void> {
    const payload = {
      firstname,
      lastname,
      email,
      password,
      inpe,
      description,
      specialty,
      telephone,
      langue,
      genreConsultation,
      prixConsultation,
      role,
      latitude,
      longitude,
    };

    return this.http.post<void>(`${this.apiDoctorUrl}/register`, payload).pipe(
      tap(() => console.log('Doctor registered successfully')) // Debug log
    );
  }

  loginDoctor(email: string, password: string): Observable<User> {
    const payload = { email, password };
    return this.http.post<User>(`${this.apiDoctorUrl}/authenticate`, payload).pipe(
      tap((user) => this.handleSuccessfulLogin(user))
    );
  }





  // **Logout**
  logout(): void {
    this.userSubject.next(null);
    this.currentUserSig.set(null);
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }


  // **Helpers**
  private handleSuccessfulLogin(user: User): void {
    this.currentUser = user;
    this.userSubject.next(user);
    this.currentUserSig.set(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }

}
