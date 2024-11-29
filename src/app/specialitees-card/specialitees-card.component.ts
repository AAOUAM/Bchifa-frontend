import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-specialitees-card',
  standalone: true,
  imports: [],
  templateUrl: './specialitees-card.component.html',
  styleUrl: './specialitees-card.component.css'
})
export class SpecialiteesCardComponent {
  @Input() specialite!: { nom: string; icon: string };
}
