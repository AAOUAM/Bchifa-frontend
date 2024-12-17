import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';
import {SpecialitesMedicales} from '../../Models/SpecialitesMedicales';
import {Router} from '@angular/router';

@Component({
  selector: 'app-specialitees-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './specialitees-card.component.html',
  styleUrl: './specialitees-card.component.css'
})
export class SpecialiteesCardComponent {
  @Input() specialite!: { nom: string; icon: string };
  protected readonly SpecialitesMedicales = SpecialitesMedicales;

  constructor(private router : Router ) {
  }
  SpecialiteeSelectionnee(specialite : any){
    alert("la specialitee selectionne est : " + specialite.nom);
    this.router.navigate(['/Listdocteur'], { queryParams: { specialite: specialite.nom } });
  }
}
