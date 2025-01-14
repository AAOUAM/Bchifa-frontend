import {Patient} from './Patient';
import {Docteur} from './Docteur';

export class Rendezvous {

  date!: Date;
  patient! : Patient;
  docteur! : Docteur;
  Cause! : string;
  notes_decteur! : string;


  constructor(date: Date, patient: Patient, docteur: Docteur, Cause: string, notes_decteur: string) {
    this.date = date;
    this.patient = patient;
    this.docteur = docteur;
    this.Cause = Cause;
    this.notes_decteur = notes_decteur;
  }
}
