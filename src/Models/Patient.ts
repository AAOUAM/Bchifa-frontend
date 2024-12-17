export class Patient {

    CIN! : string;
    nom! : string;
    telephone! : string;
    email! : string;
    addresse! : string;


  constructor(CIN: string, nom: string, telephone: string, email: string, addresse: string) {
    this.CIN = CIN;
    this.nom = nom;
    this.telephone = telephone;
    this.email = email;
    this.addresse = addresse;
  }
}
