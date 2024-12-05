import {SpecialitesMedicales} from "./SpecialitesMedicales";

export class Docteur {
  INPE!: number;
  nom!: string;
  description!: string;
  specialite!: SpecialitesMedicales | string;
  telephone!: string;
  email!: string;
  image!: string;
  Adresse!: string;
  availableDays!: string[];
  latitude!: number;
  longitude!: number;

  constructor(
    INPE: number,
    nom: string,
    description: string,
    specialite: SpecialitesMedicales | string,
    telephone: string,
    email: string,
    image: string,
    Adresse: string,
    availableDays: string[],
    latitude: number,
    longitude: number
  ) {
    this.INPE = INPE;
    this.nom = nom;
    this.description = description;
    this.specialite = specialite;
    this.telephone = telephone;
    this.email = email;
    this.image = image;
    this.Adresse = Adresse;
    this.availableDays = availableDays;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}
