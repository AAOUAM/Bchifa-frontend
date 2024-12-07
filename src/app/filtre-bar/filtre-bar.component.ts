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
  @Output() filtersChanged = new EventEmitter<any>();

  dropdowns = { price: false, availability: false, consultationType: false, moreFilters: false };
  priceOptions = ['< 50$', '50$ - 100$', '> 100$'];
  availabilityOptions = ['Disponible maintenant', 'Aujourd\'hui', 'Cette semaine'];
  consultationTypeOptions = ['Physique', 'En ligne'];
  moreFiltersOptions = ['Spécialité', 'Langue parlée', 'Note'];
  selectedFilters: any = {};

  toggleDropdown(filter: string) {
    this.dropdowns[filter] = !this.dropdowns[filter];
  }

  updateFilter(filterType: string, value: string) {
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
