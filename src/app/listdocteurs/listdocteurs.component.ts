import {Component, OnInit} from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { NgForOf} from '@angular/common';
import { DocteurCardComponent } from '../docteur-card/docteur-card.component';
import { MapComponent } from '../map/map.component';
import {FiltreBarComponent} from '../filtre-bar/filtre-bar.component';

@Component({
  selector: 'app-listdocteurs',
  standalone: true,
  imports: [
    SearchbarComponent,
    NgForOf,
    DocteurCardComponent,
    MapComponent,
    FiltreBarComponent
  ],
  templateUrl: './listdocteurs.component.html',
  styleUrls: ['./listdocteurs.component.css']
})
export class ListdocteursComponent implements OnInit {
  docteurs = [
    {
      INPE: 10101,
      nom: 'Dr Ahmed Ben Salah',
      description: 'Médecin généraliste offrant des soins de base pour tous les âges.',
      specialite: 'Médecin généraliste',
      telephone: '+212 6 61 00 00 00',
      email: 'ahmed.bensalah@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Avenue Hassan II, Rabat',
      availableDays: ['Lundi', 'Mardi', 'Jeudi'],
      latitude: 34.020882,
      longitude: -6.841650,
      avis : 4.2 ,
    },
    {
      INPE: 20202,
      nom: 'Dr Fatima Zahra El Idrissi',
      description: 'Spécialiste en pédiatrie avec une expérience approfondie en soins pour enfants.',
      specialite: 'Pédiatre',
      telephone: '+212 6 62 00 00 00',
      email: 'fatima.elidrissi@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Boulevard Mohamed Zerktouni, Casablanca',
      availableDays: ['Mardi', 'Mercredi', 'Vendredi'],
      latitude: 33.589886,
      longitude: -7.603869,
      avis : 2 ,
    },
    {
      INPE: 30303,
      nom: 'Dr Hassan Alami',
      description: 'Cardiologue expert en maladies cardiovasculaires.',
      specialite: 'Cardiologue',
      telephone: '+212 6 63 00 00 00',
      email: 'hassan.alami@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Rue Tariq Ibn Ziyad, Marrakech',
      availableDays: ['Lundi', 'Jeudi', 'Samedi'],
      latitude: 31.630000,
      longitude: -8.008889,
      avis : 5 ,
    },
    {
      INPE: 40404,
      nom: 'Dr Khadija Amrani',
      description: 'Ophtalmologiste reconnue pour son expertise en soins de la vue.',
      specialite: 'Ophtalmologue',
      telephone: '+212 6 64 00 00 00',
      email: 'khadija.amrani@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Rue Moulay Ismail, Fès',
      availableDays: ['Mardi', 'Vendredi', 'Samedi'],
      latitude: 34.033333,
      longitude: -4.999792,
      avis : 4.2 ,
    },
    {
      INPE: 50505,
      nom: 'Dr Rachid Belhaj',
      description: 'Dentiste spécialisé en soins dentaires et esthétique.',
      specialite: 'Dentiste',
      telephone: '+212 6 65 00 00 00',
      email: 'rachid.belhaj@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Avenue Al Alaouiyine, Tanger',
      availableDays: ['Lundi', 'Mercredi', 'Samedi'],
      latitude: 35.759465,
      longitude: -5.833954,
      avis : 4.2 ,
    },
    {
      INPE: 50505,
      nom: 'Dr Rachid Belhaj',
      description: 'Dentiste spécialisé en soins dentaires et esthétique.',
      specialite: 'Dentiste',
      telephone: '+212 6 65 00 00 00',
      email: 'rachid.belhaj@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Avenue Al Alaouiyine, Tanger',
      availableDays: ['Lundi', 'Mercredi', 'Samedi'],
      latitude: 35.759465,
      longitude: -5.833954,
      avis : 4.2 ,
    },
    {
      INPE: 50505,
      nom: 'Dr Rachid Belhaj',
      description: 'Dentiste spécialisé en soins dentaires et esthétique.',
      specialite: 'Dentiste',
      telephone: '+212 6 65 00 00 00',
      email: 'rachid.belhaj@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Avenue Al Alaouiyine, Tanger',
      availableDays: ['Lundi', 'Mercredi', 'Samedi'],
      latitude: 35.759465,
      longitude: -5.833954,
      avis : 4.2 ,
    },
    {
      INPE: 50505,
      nom: 'Dr Rachid Belhaj',
      description: 'Dentiste spécialisé en soins dentaires et esthétique.',
      specialite: 'Dentiste',
      telephone: '+212 6 65 00 00 00',
      email: 'rachid.belhaj@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Avenue Al Alaouiyine, Tanger',
      availableDays: ['Lundi', 'Mercredi', 'Samedi'],
      latitude: 35.759465,
      longitude: -5.833954,
      avis : 4.2 ,
    },
    {
      INPE: 50505,
      nom: 'Dr Rachid Belhaj',
      description: 'Dentiste spécialisé en soins dentaires et esthétique.',
      specialite: 'Dentiste',
      telephone: '+212 6 65 00 00 00',
      email: 'rachid.belhaj@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Avenue Al Alaouiyine, Tanger',
      availableDays: ['Lundi', 'Mercredi', 'Samedi'],
      latitude: 35.759465,
      longitude: -5.833954,
      avis : 4.2 ,
    },
  ];

  nombrederesultats: number = this.docteurs.length;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  paginatedDocteurs: any[] = [];

  ngOnInit(): void {
    this.paginateCards();
  }

  applyFilters(docteurs: any[]): any[] {
    let filtered = docteurs;

    for (let filterType in this.selectedFilters) {
      const filterValues = this.selectedFilters[filterType];
      if (filterValues && filterValues.length > 0) {
        filtered = filtered.filter((docteur: any) =>
          filterValues.includes(docteur[filterType])
        );
      }
    }
    return filtered;
  }


  paginateCards(): void {
    let filteredDocteurs = this.applyFilters(this.docteurs);

    // Pagination logic
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedDocteurs = filteredDocteurs.slice(startIndex, endIndex);
    this.nombrederesultats = filteredDocteurs.length;
  }

  selectedFilters: any = {};

  onFiltersChanged(filters: any): void {
    this.selectedFilters = filters;
    this.paginateCards();
  }


  // Navigate to the next page
  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.docteurs.length) {
      this.currentPage++;
      this.paginateCards();
    }
  }

  // Navigate to the previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateCards();
    }
  }


}
