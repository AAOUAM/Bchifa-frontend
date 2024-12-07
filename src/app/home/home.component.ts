import { Component } from '@angular/core';
import {SearchbarComponent} from '../searchbar/searchbar.component';
import {NgForOf} from '@angular/common';
import {SpecialiteesCardComponent} from '../specialitees-card/specialitees-card.component';
import {FaqComponent} from '../faq/faq.component';
import {SpecialitesMedicales} from '../../Models/SpecialitesMedicales';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchbarComponent,
    SpecialiteesCardComponent,
    NgForOf,
    FaqComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   specialites = [
     { nom: SpecialitesMedicales.MEDECINE_URGENCE, icon: 'bi bi-exclamation-triangle-fill' },
     { nom: SpecialitesMedicales.CARDIOLOGIE, icon: 'bi bi-heart-pulse' },
    { nom: SpecialitesMedicales.PNEUMOLOGIE, icon: 'bi bi-lungs' },
    { nom: SpecialitesMedicales.DERMATOLOGIE, icon: 'bi bi-person-bounding-box' },
    { nom: SpecialitesMedicales.PSYCHIATRIE, icon: 'bi bi-emoji-dizzy' },
    { nom: SpecialitesMedicales.OPHTALMOLOGUE, icon: 'bi bi-eye' },
    { nom: SpecialitesMedicales.CHIRURGIE_ORL, icon: 'bi bi-ear' },
    { nom: SpecialitesMedicales.RADIOLOGIE, icon: 'bi bi-images' },
  ];

}
