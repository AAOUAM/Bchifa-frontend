import {Component, OnInit} from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { NgForOf} from '@angular/common';
import { DocteurCardComponent } from '../docteur-card/docteur-card.component';
import { MapComponent } from '../map/map.component';
import {FiltreBarComponent} from '../filtre-bar/filtre-bar.component';
import {ActivatedRoute} from '@angular/router';
import {Docteur} from '../../Models/Docteur';

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
      prixConsultation: 40,
      GenreConsultation: 'Présentiel',
      Langue: ['Français', 'Arabe'],
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
      prixConsultation: 40,
      GenreConsultation: 'Présentiel',
      Langue: ['Arabe'],
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
      prixConsultation: 40,
      GenreConsultation: 'Présentiel',
      Langue: ['Français', 'Arabe'],
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
      prixConsultation: 40,
      GenreConsultation: 'En ligne',
      Langue: ['Arabe', 'Anglais'],
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
      prixConsultation: 400,
      GenreConsultation: 'En ligne',
      Langue: ['Arabe', 'Anglais'],
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
      prixConsultation: 30,
      GenreConsultation: 'En ligne',
      Langue: ['Arabe', 'Anglais'],
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
      prixConsultation: 50,
      GenreConsultation: 'En ligne',
      Langue: ['Arabe', 'Anglais'],
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
      prixConsultation: 40,
      GenreConsultation: 'En ligne',
      Langue: ['Anglais'],

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
      prixConsultation: 100,
      GenreConsultation: 'Présentiel',
      Langue: ['Français', 'Arabe'],
    },
  ];

  nombrederesultats!: number ;
  currentPage: number = 1;
  itemsPerPage: number = 5;
  paginatedDocteurs: any[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paginateCards();
    this.route.queryParams.subscribe(params => {
      const specialite = params['specialite'];
      if (specialite) {
        this.paginatedDocteurs = this.docteurs.filter(doc => doc.specialite === specialite);
      } else {
        this.paginatedDocteurs = this.docteurs; // Affiche tous les docteurs par défaut
      }
    });
    this.nombrederesultats = this.paginatedDocteurs.length;
  }


  applyFilters(docteurs: Docteur[]){
    let filtered = docteurs;

    for (let filterType in this.selectedFilters) {
      const filterValues = this.selectedFilters[filterType];
      if (filterValues && filterValues.length > 0) {
        switch (filterType) {
          case 'Langue':
            // Filtrer par Langues
            filtered = filtered.filter((docteur) =>
              filterValues.some((langue: string) => docteur.Langue.includes(langue))
            );
            break;

          case 'avis':
            // Filtrer par Avis (Note)
            filtered = filtered.filter((docteur) =>
              filterValues.includes(Math.floor(docteur.avis))
            );
            break;

          case 'availableDays':
            // Filtrer par jours disponibles
            filtered = filtered.filter((docteur) =>
              filterValues.some((day: string) => docteur.availableDays.includes(day))
            );
            break;

          default:
            // Filtrage générique (pour prixConsultation, GenreConsultation, etc.)
            filtered = filtered.filter((docteur) =>
              filterValues.includes(docteur[filterType as keyof Docteur])
            );
            break;
        }
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
