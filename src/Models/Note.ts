export class Note {
  titre!: string;
  not!: string; // Correction : utilisez ':' au lieu de '!='

  constructor(titre: string, not: string) {
    this.titre = titre;
    this.not = not;
  }
}
