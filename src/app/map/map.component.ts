import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet'; // Si vous utilisez Leaflet

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent implements OnInit {
  @Input() locations: any[] = []; // Liste des docteurs ou emplacements

  private map: any;


  ngOnInit(): void {
    this.initializeMap();

    // Ajouter des marqueurs si des emplacements sont fournis
    if (this.locations) {
      this.addMarkers(this.locations);
    }
  }

  initializeMap(): void {
    this.map = L.map('map-container').setView([31.7917, -7.0926], 6); // Coordonnées pour le Maroc
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'}).addTo(this.map);
    
  }

  addMarkers(locations: any[]): void {
    locations.forEach(location => {
      const { latitude, longitude, name } = location;
      if (latitude && longitude) {
        L.marker([latitude, longitude])
          .addTo(this.map)
          .bindPopup(name);
      }
    });
  }
}
