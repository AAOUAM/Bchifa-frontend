import {Docteur} from './Docteur';

export class AvailableDay {

  Jour!: string;
  heure!: string[];

  constructor(Jour: string, heure: string[]) {
    this.Jour = Jour;
    this.heure = heure;
  }

}
