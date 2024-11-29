import { Component } from '@angular/core';
import {SearchbarComponent} from '../searchbar/searchbar.component';
import {NgForOf, NgOptimizedImage} from '@angular/common';
import {SpecialiteesCardComponent} from '../specialitees-card/specialitees-card.component';
import {FaqComponent} from '../faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SearchbarComponent,
    NgOptimizedImage,
    SpecialiteesCardComponent,
    NgForOf,
    FaqComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  specialites = [
    { nom: 'Cardiologie', icon: 'bi-heart-pulse' },
    { nom: 'Ophtalmologie', icon: 'bi-eye' },
    { nom: 'Pneumologie', icon: 'bi-lungs' },
    { nom: 'Pneumologie', icon: 'bi-lungs' },
    { nom: 'Pneumologie', icon: 'bi-lungs' },
    { nom: 'Pneumologie', icon: 'bi-lungs' },
    // Ajoutez d'autres spécialités ici
  ];
}
