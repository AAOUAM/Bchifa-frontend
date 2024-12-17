import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk'; // MapTiler SDK imports
import '@maptiler/sdk/dist/maptiler-sdk.css';
import {Popup} from 'leaflet'; // CSS for MapTiler SDK

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  standalone: true,
  styleUrls: ['./map.component.css'] // Ensure this file has relevant styles
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy , OnChanges{
  @Input() locations: any[] = []; // List of doctors or locations to display as markers
  private map: Map | undefined;

  @ViewChild('mapContainer', { static: true })
  private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    config.apiKey = '7BuANVT83j0hWrwFxS2m';
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['locations']) {
      this.refreshMap(); // Rafraîchir la carte avec les nouvelles localisations
    }
  }

  refreshMap(): void {
    // Logique pour mettre à jour la carte
    console.log('Carte mise à jour avec les localisations :', this.locations);
  }

  ngAfterViewInit(): void {
    this.initializeMap();
    this.addMarkers(this.locations);
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  private initializeMap(): void {
    // Initialize the MapTiler map
    this.map = new Map({
      container: this.mapContainer.nativeElement, // DOM element for the map
      style: "14420d1d-5ff4-4b71-bda1-958e4178fc41", // My personnal style
      center: [-7.0926, 31.7917], // Center the map on Morocco
      zoom: 4, // Zoom level to fit the whole country (you may need to adjust this value)
    });
  }

  private addMarkers(locations: any[]): void {
    if (this.map && locations.length > 0) {
      locations.forEach(location => {
        const { latitude, longitude, name } = location;
        if (latitude && longitude) {
          new Marker({ color: 'blue' }) // Create a red marker
            .setLngLat([longitude, latitude])// Set marker position
            .addTo(this.map); // Add the marker to the map
        }
      });
    }
  }
}
