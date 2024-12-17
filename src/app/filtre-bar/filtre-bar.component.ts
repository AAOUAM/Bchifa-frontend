import { Component, EventEmitter, Output } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-filtre-bar',
  standalone: true,
  imports: [NgForOf, NgIf],
  templateUrl: './filtre-bar.component.html',
  styleUrls: ['./filtre-bar.component.css']
})
export class FiltreBarComponent {
  protected readonly toString = toString;
  @Output() filtersChanged = new EventEmitter<any>();

  priceOptions = ['< 50$', '50$ - 100$', '> 100$'];
  availabilityOptions = ['Disponible maintenant', 'Aujourd\'hui', 'Cette semaine'];
  consultationTypeOptions = ['Physique', 'En ligne'];
  languageOptions = ['Français', 'Anglais', 'Arabe'];
  ratingOptions = [1, 2, 3, 4, 5];

  selectedFilters: any = {};

  updateFilter(filterType: string, value: string | number) {
    if (!this.selectedFilters[filterType]) {
      this.selectedFilters[filterType] = [];
    }
    const index = this.selectedFilters[filterType].indexOf(value);
    if (index > -1) {
      this.selectedFilters[filterType].splice(index, 1);
    } else {
      this.selectedFilters[filterType].push(value);
    }
    this.filtersChanged.emit(this.selectedFilters);
  }


}
