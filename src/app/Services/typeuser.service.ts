import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeuserService {

  private userRole: 'doctor' | 'patient' | null = null;


  constructor() { }



  setDoctor() {
    this.userRole = 'doctor';
    localStorage.setItem('userRole', 'doctor');  // Optionally store in localStorage for persistence
  }

  setPatient() {
    this.userRole = 'patient';
    localStorage.setItem('userRole', 'patient');  // Optionally store in localStorage for persistence
  }

  getUserRole(): 'doctor' | 'patient' | null {
    return this.userRole || localStorage.getItem('userRole') as 'doctor' | 'patient' | null;
  }

  isDoctor(): boolean {
    return this.getUserRole() === 'doctor';
  }

  isPatient(): boolean {
    return this.getUserRole() === 'patient';
  }



}
