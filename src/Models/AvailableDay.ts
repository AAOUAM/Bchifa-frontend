import {Docteur} from './Docteur';

export class AvailableDay {

  Jour!: String;
  heure!: String[];

  constructor(Jour: String, heure: String[]) {
    this.Jour = Jour;
    this.heure = heure;
  }

}
