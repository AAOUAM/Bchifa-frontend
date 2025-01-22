import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  private apiUrl = 'http://localhost:8082/api/messages'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getMessages(receiverId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${receiverId}`);
  }

  sendMessage(message: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, message);
  }
}