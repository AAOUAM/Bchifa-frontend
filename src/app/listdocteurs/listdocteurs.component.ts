import { Component } from '@angular/core';
import {SearchbarComponent} from '../searchbar/searchbar.component';
import {NgForOf, NgIf} from '@angular/common';
import {DocteurCardComponent} from '../docteur-card/docteur-card.component';
import {MapComponent} from '../map/map.component';

@Component({
  selector: 'app-listdocteurs',
  standalone: true,
  imports: [
    SearchbarComponent,
    NgForOf,
    NgIf,
    DocteurCardComponent,
    MapComponent
  ],
  templateUrl: './listdocteurs.component.html',
  styleUrl: './listdocteurs.component.css'
})
export class ListdocteursComponent {
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
    },
  ];

  nombrederesultats : number = this.docteurs.length ;


  dropdowns = {
    price: false,
    availability: false,
    consultationType: false,
    moreFilters: false,
  };

  // Options pour chaque filtre
  priceOptions = ['< 50$', '50$ - 100$', '> 100$'];
  availabilityOptions = ['Disponible maintenant', 'Aujourd\'hui', 'Cette semaine'];
  consultationTypeOptions = ['Physique', 'En ligne'];
  moreFiltersOptions = ['Spécialité', 'Langue parlée', 'Note'];

  // Filtre sélectionné
  selectedFilters: any = {};

  // Afficher ou cacher une liste déroulante
  toggleDropdown(filter: string) {
    this.dropdowns["moreFilters"] = !this.dropdowns["moreFilters"];
  }

  // Mettre à jour les filtres sélectionnés
  updateFilter(filterType: string, value: string) {
    if (!this.selectedFilters[filterType]) {
      this.selectedFilters[filterType] = [];
    }

    // Ajouter ou retirer la valeur
    const index = this.selectedFilters[filterType].indexOf(value);
    if (index > -1) {
      this.selectedFilters[filterType].splice(index, 1);
    } else {
      this.selectedFilters[filterType].push(value);
    }

    console.log(this.selectedFilters); // Debug des filtres sélectionnés
  }
}
