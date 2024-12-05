import {Component, Input} from '@angular/core';
import {Docteur} from '../../Models/Docteur';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-docteur-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './docteur-card.component.html',
  styleUrl: './docteur-card.component.css'
})
export class DocteurCardComponent {
  @Input() docteur!: Docteur ;

  bookAppointment() {
    alert(`Vous avez sélectionné le docteur ${this.docteur.nom} pour une consultation.`);
  }
}
