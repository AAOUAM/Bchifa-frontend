import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MessageChat {
  private apiUrl = 'http://localhost:8082/chat'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getChatHistory(receiver: string, sender: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/chat-history`, {
      params: {
        receiver,
        sender,
      },
    });
  }

  
}