import {Component, Input} from '@angular/core';
import {Docteur} from '../../Models/Docteur';

import {NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-docteur-card',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
    NgIf
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
