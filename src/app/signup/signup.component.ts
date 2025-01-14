import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
  FormArray
} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {TypeuserService} from '../Services/typeuser.service';
import {SpecialitesMedicales} from '../../Models/SpecialitesMedicales';
import {AvailableDay} from '../../Models/AvailableDay';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgIf, FormsModule, NgClass, ReactiveFormsModule, RouterLink, NgForOf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit {

  step = 1; // Control the current step
  patientForm: FormGroup;
  doctorForm: FormGroup;

  showAlert = false;
  alertMessage: string = '';

  userRole: 'doctor' | 'patient' | null = null;


  ngOnInit() {
    this.userRole = this.typeUserService.getUserRole();
    this.getUserLocation();


  }

  onSubmit() {
    if (this.doctorForm.valid) {
      console.log(this.doctorForm.value);  // Process the form values here
    } else {
      console.log('Form is not valid');
    }
  }

  specialites  = Object.values(SpecialitesMedicales);

  emailtest:String [] = ["aymanekenbouch@gmail.com","vvv@gmail.com"];

  constructor(private fb: FormBuilder,private typeUserService : TypeuserService) {
    this.patientForm = this.fb.group({
      emailP: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      birthDate: ['', [Validators.required, this.validateBirthDate]]
    });


    this.doctorForm = this.fb.group({
      INPE: ['', [Validators.required]],
      nom: ['', [Validators.required, Validators.minLength(2)]],
      prenom: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', Validators.required],
      specialite: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      emailD: ['', [Validators.required, Validators.email]],
      image: [''],
      Adresse: ['', Validators.required],
      availableDays: [[], Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      prixConsultation: ['', [Validators.required, Validators.min(0)]],
      GenreConsultation: ['', Validators.required],
      Langue: ['', Validators.required],
    });

  }







  getUserLocation(): void {
    if (this.userRole=='doctor'){
      alert("Vous etes dans votre cabinet de travail ? si oui accepter ")
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {

            // Get the latitude and longitude
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Log the coordinates to the console
            console.log('Latitude: ', lat);
            console.log('Longitude: ', lng);

            // You can use these values as needed in your app
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }
  }






  validateBirthDate(control: FormControl): { [key: string]: any } | null {
    const birthDate = new Date(control.value);
    const today = new Date();
    if (isNaN(birthDate.getTime())) {
      return { invalidDate: true }; // Invalid date format
    }
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    if (age < 18) {
      return { underage: true }; // User is not at least 18 years old
    }
    return null; // Valid date
  }


  // Access individual form controls with casting

  get emailP(): FormControl {
    return this.patientForm.get('emailP') as FormControl;
  }

  get gender(): FormControl {
    return this.patientForm.get('gender') as FormControl;
  }

  get firstName(): FormControl {
    return this.patientForm.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.patientForm.get('lastName') as FormControl;
  }

  get birthDate(): FormControl {
    return this.patientForm.get('birthDate') as FormControl;
  }



  get INPE() {
    return this.doctorForm.get('INPE') as FormControl;
  }

  get nom() {
    return this.doctorForm.get('nom') as FormControl;
  }

  get prenom() {
    return this.doctorForm.get('prenom') as FormControl;
  }


  get description() {
    return this.doctorForm.get('description') as FormControl;
  }

  get specialite() {
    return this.doctorForm.get('specialite') as FormControl;
  }

  get telephone() {
    return this.doctorForm.get('telephone') as FormControl;
  }

  get emailD() {
    return this.doctorForm.get('email') as FormControl;
  }

  get image() {
    return this.doctorForm.get('image') as FormControl;
  }

  get Adresse() {
    return this.doctorForm.get('Adresse') as FormControl;
  }

  get availableDays(): FormArray {
    return this.doctorForm.get('availableDays') as FormArray;
  }
  get latitude() {
    return this.doctorForm.get('latitude') as FormControl;
  }

  get longitude() {
    return this.doctorForm.get('longitude') as FormControl;
  }



  get prixConsultation() {
    return this.doctorForm.get('prixConsultation') as FormControl;
  }

  get GenreConsultation() {
    return this.doctorForm.get('GenreConsultation') as FormControl;
  }

  get Langue() {
    return this.doctorForm.get('Langue') as FormControl;
  }


  submitForm() {
    if (this.doctorForm.valid) {
      console.log(this.doctorForm.value);
      alert('Docteur enregistré avec succès !');
    } else {
      alert('Veuillez compléter toutes les étapes du formulaire.');
    }
  }







  nextStep(): void {
    if (this.step === 1 && this.emailP.valid) {
      const enteredEmail = this.emailP.value;

      // Check if email exists in the array
      if (this.emailtest.includes(enteredEmail)) {
        this.alertMessage = 'Cet email existe déjà chez nous !';
        this.showAlert = true;
        console.log(this.alertMessage);
        return; // Prevent moving to the next step
      }

      this.step = 2; // Proceed to Step 2 if the email is valid and doesn't exist already
    }
    else if (this.step === 2 && this.patientForm.valid) {
      // If form is valid, proceed to Step 3 (success message)
      this.step = 3;
    }
    else {
      // Optionally, handle the case where the form is invalid on Step 2
      alert('Veuillez remplir correctement tous les champs.');
    }
  }




  nextStepDoc(): void {
    if (this.step === 1 ) {
      this.step = 2; // Proceed to Step 2 if the email is valid and doesn't exist already
    }
    else if (this.step === 2 ) {
      this.step = 3;
    }
    else {
      alert('Veuillez remplir correctement tous les champs.');
    }

  }


  previousStep(): void {
    if (this.step > 1) {
      this.step--;
    }
  }

  modifyEmail(): void {
    this.showAlert = false;
  }

  connect(): void {
    alert('Redirection vers la page de connexion'); // Vous pouvez ajouter une navigation ici
  }

}
