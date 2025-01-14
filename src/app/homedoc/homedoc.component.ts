import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-homedoc',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './homedoc.component.html',
  styleUrl: './homedoc.component.css'
})
export class HomedocComponent {

  dashboardCards = [
    {
      title: 'Gestion des rendez-vous',
      description: 'Organisez vos horaires et planifiez vos consultations facilement.',
      action: 'Voir les rendez-vous',
    },
    {
      title: 'Liste des patients',
      description: 'Accédez rapidement aux dossiers médicaux et aux informations des patients.',
      action: 'Voir les patients',
    },
    {
      title: 'Statistiques',
      description: 'Analysez vos performances avec des données détaillées.',
      action: 'Voir les statistiques',
    },
  ];

}
