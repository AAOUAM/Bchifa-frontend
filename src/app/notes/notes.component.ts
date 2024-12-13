import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Note} from '../Modules/Note';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

  wannaddnote = false;
  titre: string = ''; // Initialise avec une chaîne vide
  noteContent: string = ''; // Renommé pour éviter les conflits avec l'objet Note
  notes: Note[] = []; // Stocke toutes les notes ajoutées

  newnote() {
    this.wannaddnote = true;
  }

  addnote() {
    // Crée un nouvel objet Note avec les valeurs saisies
    const newNote = new Note(this.titre, this.noteContent);
    this.notes.push(newNote); // Ajoute la nouvelle note à la liste
    this.clearForm(); // Réinitialise le formulaire
  }

  clearForm() {
    this.titre = '';
    this.noteContent = '';
    this.wannaddnote = false;
  }

  canceladdNote() {
    this.wannaddnote=false;
    this.noteContent ="";
    this.titre="";

  }
}
