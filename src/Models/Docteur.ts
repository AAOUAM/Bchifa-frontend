import {SpecialitesMedicales} from "./SpecialitesMedicales";
import {AvailableDay} from './AvailableDay';

export class Docteur {
  INPE!: number;
  nom!: string;
  description!: string;
  specialite!: SpecialitesMedicales | string;
  telephone!: string;
  email!: string;
  image!: string;
  Adresse!: string;
  availableDays!: String[];
  latitude!: number;
  longitude!: number;
  avis!:number ;
  prixConsultation!: number;
  GenreConsultation! : string;
  Langue! : String[]

  constructor(
    INPE: number,
    nom: string,
    description: string,
    specialite: SpecialitesMedicales | string,
    telephone: string,
    email: string,
    image: string,
    Adresse: string,
    availableDays: String[],
    latitude: number,
    longitude: number,
    avis : number,
    prixConsultation: number ,
    GenreConsultation : string ,
    Langue : string[] ,


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
    this.avis = avis;
    this.prixConsultation = prixConsultation;
    this.GenreConsultation = GenreConsultation;
    this.Langue = Langue;
  }
}
