import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Doc} from './Modules/Doc';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  addDocument(doc: Doc) {
   //  this.http.post('http://localhost:5000/docs', doc);
  }


}
