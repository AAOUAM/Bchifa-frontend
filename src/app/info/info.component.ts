import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DocumentsComponent} from '../documents/documents.component';
import {NotesComponent} from '../notes/notes.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [
    DocumentsComponent,
    NotesComponent,
    NgClass
  ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  showdoc = true;
  constructor(private router: Router) {

  }

  Onswitch(){
    this.showdoc = !this.showdoc;
  }



}
