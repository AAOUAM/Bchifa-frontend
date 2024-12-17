export class Patient {
  CIN!: string;
  nom!: string;
  prenom!: string;
  dateNaissance!: Date;
  sexe!: string;
  telephone!: string;
  email!: string;
  adresse!: string;
  groupeSanguin?: string;
  historiqueMedical?: string[];

  constructor(
    CIN: string,
    nom: string,
    prenom: string,
    dateNaissance: Date,
    sexe: string,
    telephone: string,
    email: string,
    adresse: string,
    groupeSanguin?: string,
    historiqueMedical?: string[]
  ) {
    this.CIN = CIN;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.sexe = sexe;
    this.telephone = telephone;
    this.email = email;
    this.adresse = adresse;
    this.groupeSanguin = groupeSanguin;
    this.historiqueMedical = historiqueMedical;
  }
}
