import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocteurService} from '../Services/docteur-service.service';
import {NgForOf, NgIf} from '@angular/common';
import { AvailableDay } from '../../Models/AvailableDay';
import {MapComponent} from '../map/map.component';

@Component({
  selector: 'app-doc-profil',
  templateUrl: './doc-profil.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    MapComponent
  ],
  styleUrls: ['./doc-profil.component.css']
})
export class DocProfilComponent implements OnInit {
  docteur: any;
  paginatedDocteurs: any[] = [];


  constructor(
    private route: ActivatedRoute,
    private docteurService: DocteurService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.docteur = this.docteurService.getDocteurById(id);
  }
  selectedDay: AvailableDay | null = null; // Stocke le jour sélectionné

}
