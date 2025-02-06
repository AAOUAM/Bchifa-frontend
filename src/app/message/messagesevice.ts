import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private apiUrl = 'http://localhost:8082/api/messages'; 
  private perUrl = 'http://localhost:8082/api/personne'; 

  constructor(private http: HttpClient) {}

  getMessages(receiverId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${receiverId}`);
  }

  sendMessage(message: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, message);
  }
  getPersonneById(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.perUrl}/id/${id}`);
  }
  getPersonneByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.perUrl}/name/${name}`);
  }
  addPerson(person: any): Observable<any> {
    return this.http.post<any>(`${this.perUrl}/personne`, person);
  }
}