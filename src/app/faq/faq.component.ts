import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqItems = [
    {
      question: "Quelle est l'importance d'une consultation régulière ?",
      answer:
        'Les consultations régulières permettent de prévenir les maladies, détecter les problèmes de santé précocement et maintenir une bonne qualité de vie.'
    },
    {
      question: 'Quels sont les vaccins nécessaires pour un adulte ?',
      answer:
        'Les vaccins essentiels incluent ceux contre la grippe, le tétanos, la coqueluche, et dans certains cas, le pneumocoque et l’hépatite.'
    },
    {
      question: 'Quels sont les signes d’une maladie chronique ?',
      answer:
        'Fatigue persistante, douleurs chroniques, troubles respiratoires ou encore des anomalies détectées lors d’examens médicaux réguliers peuvent indiquer une maladie chronique.'
    },
    {
      question: 'Comment éviter les maladies cardiovasculaires ?',
      answer:
        'Pour éviter les maladies cardiovasculaires, adoptez une alimentation équilibrée, pratiquez une activité physique régulière, et évitez le tabac et l’alcool en excès.'
    },
    {
      question: 'Quels examens de santé sont essentiels chaque année ?',
      answer:
        'Les examens recommandés incluent un bilan sanguin, un contrôle de la pression artérielle, et un dépistage du diabète et du cholestérol.'
    }
    ];
}
