import { Injectable } from '@angular/core';
import { Patient} from '../../Models/Patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private patient: Patient = new Patient(
    'AB123456',
    'Ghalem',
    'Romaissae',
    new Date('2003-03-14'),
    'Femme',
    '+212 6 13 69 36 04',
    'rrrrr@gamil.com',
    ' Emi Agdal , Rabat',
    'A+',
    ['GOOOD ', 'Lowtension']
  );

  constructor() {}

  // Méthode pour obtenir le profil du patient connecté
  getPatient(): Patient {
    return this.patient;
  }

  // Méthode pour mettre à jour les informations du patient
  updatePatient(updatedPatient: Patient): void {
    this.patient = updatedPatient;
  }
}

