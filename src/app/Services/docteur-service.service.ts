import { Injectable } from '@angular/core';
import { AvailableDay } from '../../Models/AvailableDay';

@Injectable({
  providedIn: 'root',
})
export class DocteurService {
  private docteurs = [
    {
      INPE: 10101,
      nom: 'Dr Ahmed Ben Salah',
      description: 'Médecin généraliste offrant des soins de base pour tous les âges.',
      specialite: 'Médecin généraliste',
      telephone: '+212 6 61 00 00 00',
      email: 'ahmed.bensalah@example.com',
      emplacementDetails: {
        etage: 'Rez-de-chaussée, aile droite',
        acces: 'Parking payant, tramway ligne T3 arrêt Zerktouni',
        lienMaps: 'https://maps.google.com/?q=Boulevard+Mohamed+Zerktouni,+Casablanca',
      },
      image: 'https://via.placeholder.com/100',
      Adresse: 'Avenue Hassan II, Rabat',
      availableDays: [
        new AvailableDay('Lundi', ['09:00', '10:00', '11:30', '14:00', '15:00']),
        new AvailableDay('Mardi', ['10:00', '11:00', '13:00', '16:00']),
        new AvailableDay('Jeudi', ['09:30', '11:30', '14:30', '17:00']),
      ],

      latitude: 34.020882,

      longitude: -6.841650,
      avis: 4.2,
      universite: 'Université Mohammed V de Rabat',
      diplome: 'Doctorat en médecine générale',
      experience: '10 ans d\'expérience en médecine familiale',
      cabinet: {
        emplacement: 'Avenue Hassan II, Rabat',
        tarifs: {
          enfants: '200 MAD',
          adultes: '250 MAD',
          seniors: '150 MAD',
        },
      },
    },
    {
      INPE: 20202,
      nom: 'Dr Fatima Zahra El Idrissi',
      description: 'Spécialiste en pédiatrie avec une expérience approfondie en soins pour enfants.',
      specialite: 'Pédiatre',
      telephone: '+212 6 62 00 00 00',
      emplacementDetails: {
        etage: 'Rez-de-chaussée, aile droite',
        acces: 'Parking payant, tramway ligne T3 arrêt Zerktouni',
        lienMaps: 'https://maps.google.com/?q=Boulevard+Mohamed+Zerktouni,+Casablanca',
      },
      email: 'fatima.elidrissi@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Boulevard Mohamed Zerktouni, Casablanca',
      availableDays: [
        new AvailableDay('Lundi', ['09:00', '10:00', '11:30', '14:00', '15:00']),
        new AvailableDay('Mardi', ['10:00', '11:00', '13:00', '16:00']),
        new AvailableDay('Jeudi', ['09:30', '11:30', '14:30', '17:00']),
      ],
      latitude: 33.589886,
      longitude: -7.603869,
      avis: 4.5,
      universite: 'Université Hassan II de Casablanca',
      diplome: 'Spécialisation en pédiatrie',
      experience: '15 ans d expérience enw soins pédiatriques',
      cabinet: {
        emplacement: 'Boulevard Mohamed Zerktouni, Casablanca',
        tarifs: {
          enfants: '300 MAD',
          adultes: 'N/A',
          seniors: 'N/A',
        },
      },
    },
    {
      INPE: 30303,
      nom: 'Dr Hassan Alami',
      description: 'Cardiologue expert en maladies cardiovasculaires.',
      specialite: 'Cardiologue',
      telephone: '+212 6 63 00 00 00',
      email: 'hassan.alami@example.com',
      emplacementDetails: {
        etage: 'Rez-de-chaussée, aile droite',
        acces: 'Parking payant, tramway ligne T3 arrêt Zerktouni',
        lienMaps: 'https://maps.google.com/?q=Boulevard+Mohamed+Zerktouni,+Casablanca',
      },
      image: 'https://via.placeholder.com/100',
      Adresse: 'Rue Tariq Ibn Ziyad, Marrakech',
      availableDays: [
        new AvailableDay('Lundi', ['09:00', '10:00', '11:30', '14:00', '15:00']),
        new AvailableDay('Mardi', ['10:00', '11:00', '13:00', '16:00']),
        new AvailableDay('Jeudi', ['09:30', '11:30', '14:30', '17:00']),
      ],
      latitude: 31.630000,
      longitude: -8.008889,
      avis: 4.8,
      universite: 'Université Cadi Ayyad de Marrakech',
      diplome: 'Doctorat en cardiologie',
      experience: '20 ans d\'expérience en cardiologie',
      cabinet: {
        emplacement: 'Rue Tariq Ibn Ziyad, Marrakech',
        tarifs: {
          enfants: '400 MAD',
          adultes: '500 MAD',
          seniors: '300 MAD',
        },
      },
    },
    {
      INPE: 40404,
      nom: 'Dr Khadija Amrani',
      emplacementDetails: {
        etage: 'Rez-de-chaussée, aile droite',
        acces: 'Parking payant, tramway ligne T3 arrêt Zerktouni',
        lienMaps: 'https://maps.google.com/?q=Boulevard+Mohamed+Zerktouni,+Casablanca',
      },
      description: 'Ophtalmologiste reconnue pour son expertise en soins de la vue.',
      specialite: 'Ophtalmologue',
      telephone: '+212 6 64 00 00 00',
      email: 'khadija.amrani@example.com',
      image: 'https://via.placeholder.com/100',
      Adresse: 'Rue Moulay Ismail, Fès',
      availableDays: [
        new AvailableDay('Lundi', ['09:00', '10:00', '11:30', '14:00', '15:00']),
        new AvailableDay('Mardi', ['10:00', '11:00', '13:00', '16:00']),
        new AvailableDay('Jeudi', ['09:30', '11:30', '14:30', '17:00']),
      ],
      latitude: 34.033333,
      longitude: -4.999792,
      avis: 4.6,
      universite: 'Université Sidi Mohamed Ben Abdellah de Fès',
      diplome: 'Spécialisation en ophtalmologie',
      experience: '12 ans dexpérience en soins ophtalmologiques',
      cabinet: {
        emplacement: 'Rue Moulay Ismail, Fès',
        tarifs: {
          enfants: '300 MAD',
          adultes: '400 MAD',
          seniors: '250 MAD',
        },
      },
    },
  ];

  constructor() {}

  // Méthode pour obtenir tous les docteurs
  getDocteurs() {
    return this.docteurs;
  }

  // Méthode pour obtenir un docteur par ID
  getDocteurById(id: number) {
    return this.docteurs.find(docteur => docteur.INPE === id);
  }
  getHorairesDocteur(INPE: number) {
    const docteur = this.getDocteurById(INPE);
    if (docteur) {
      return docteur.availableDays;
    } else {
      throw new Error('Docteur non trouvé');
    }
  }

}
