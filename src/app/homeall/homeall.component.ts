import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../Services/auth.service';
import {NgFor} from '@angular/common';
import {TypeuserService} from '../Services/typeuser.service';

@Component({
  selector: 'app-homeall',
  standalone: true,
  imports: [RouterLink,NgFor],
  templateUrl: './homeall.component.html',
  styleUrl: './homeall.component.css'
})
export class HomeallComponent  {

  recommendations = [
    { title: 'Meilleur service médical', description: 'Une assistance 24/7 pour tous vos besoins médicaux.' },
    { title: 'Rendez-vous en ligne', description: 'Prenez rendez-vous avec les meilleurs docteurs.' },
    { title: 'Suivi personnalisé', description: 'Un suivi précis et adapté à votre situation.' }
  ];




  constructor(private userTypeService: TypeuserService ){
  }


  makeDoctor() {
    this.userTypeService.setDoctor();
  }

  makePatient() {
    this.userTypeService.setPatient();
  }

  getCurrentUserRole() {
    return this.userTypeService.getUserRole();
  }








}
