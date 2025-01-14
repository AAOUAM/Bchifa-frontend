import { Component, OnInit } from '@angular/core';
import { PatientService} from '../Services/patient.service';
import { Patient } from '../../Models/Patient';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  standalone: true,
  imports : [NgFor],
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patient: Patient;

  constructor(private patientService: PatientService) {
    this.patient = this.patientService.getPatient();
  }

  ngOnInit(): void {}
}
