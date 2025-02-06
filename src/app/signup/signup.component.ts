import {Component, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormControl,
  FormArray, AbstractControl, ValidationErrors
} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {TypeuserService} from '../Services/typeuser.service';
import {SpecialitesMedicales} from '../../Models/SpecialitesMedicales';
import {AuthService} from '../Services/auth.service';



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


  specialites  = Object.values(SpecialitesMedicales);


  constructor(private fb: FormBuilder,private typeUserService : TypeuserService, private authenticationService : AuthService, private router: Router) {
    this.patientForm = this.fb.group({
        emailP: ['', [Validators.required, Validators.email]],
        gender: ['', Validators.required],
        passWordP: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            )
          ],
        ],
        confirmPasswordP: ['', Validators.required],
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required, Validators.minLength(2)]],
        birthDate: ['', [Validators.required, this.validateBirthDate]]
      },
      {
        validators: this.passwordMatchValidatorP,
      }
    );



    this.doctorForm = this.fb.group({
        INPE: ['', [Validators.required]],
        nom: ['', [Validators.required, Validators.minLength(2)]],
        prenom: ['', [Validators.required, Validators.minLength(2)]],
        description: ['', Validators.required],
        passWordD: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            ),

          ],
        ],
        confirmPasswordD: ['', Validators.required],
        specialite: ['', Validators.required],
        telephone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
        emailD: ['', [Validators.required, Validators.email]],
        prixConsultation: ['', [Validators.required, Validators.min(0)]],
        GenreConsultation: ['', Validators.required],
        Langue: ['', Validators.required],
      },
      {
        validators: this.passwordMatchValidatorD,
      }
    );

  }

  passwordMatchValidatorP(formGroup: FormGroup): ValidationErrors | null {
    const password = formGroup.get('passWordP')?.value;
    const confirmPassword = formGroup.get('confirmPasswordP')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }



  passwordMatchValidatorD(formGroup: FormGroup): ValidationErrors | null {
    const password = formGroup.get('passWordD')?.value;
    const confirmPassword = formGroup.get('confirmPasswordD')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }


  signUpPatient(): void {
    if (this.patientForm.valid) {

      const patientData = this.patientForm.value;

      const requestPayload = {
        firstName: patientData.firstName,
        lastName: patientData.lastName,
        email: patientData.emailP, // Assuming emailP is the field in the form
        password: patientData.passWordP, // Assuming passWordP is the field in the form
        gender: patientData.gender,
        dateOfBirth: patientData.birthDate ,
        role: "PATIENT"
      };

      console.log('Request Payload:', requestPayload);
      this.authenticationService.registerPatient(requestPayload.firstName,requestPayload.lastName,requestPayload.email,requestPayload.password,requestPayload.gender,requestPayload.dateOfBirth,requestPayload.role).subscribe(
        (response : any) => {
          if (response.token != null) {
            this.step = this.step +1 ;
            this.router.navigateByUrl('/signin');
          }
          else {
            alert(response.msg);
          }
        }
      )
    }
  }



  signUpDoctor(): void {
    if (this.doctorForm.valid) {

      const doctorData = this.doctorForm.value;
      console.log('doctorform ', doctorData);


      const requestPayload = {
        firstname: doctorData.prenom,
        lastname: doctorData.nom,
        email: doctorData.emailD,
        password: doctorData.passWordD,
        inpe: doctorData.INPE,
        description: doctorData.description,
        specialty: doctorData.specialite,
        telephone: doctorData.telephone,
        langue: doctorData.Langue,
        genreConsultation: doctorData.GenreConsultation,
        prixConsultation: doctorData.prixConsultation,
        role : "DOCTOR",
        latitude : this.lat,
        longitude : this.lng

      };

      this.authenticationService.registerDoctor(
        requestPayload.firstname,
        requestPayload.lastname,
        requestPayload.email,
        requestPayload.password,
        requestPayload.inpe,
        requestPayload.description,
        requestPayload.specialty,
        requestPayload.telephone,
        requestPayload.langue,
        requestPayload.genreConsultation,
        requestPayload.prixConsultation,
        requestPayload.role,
        requestPayload.latitude,
        requestPayload.longitude,
      ).subscribe(
        (response: any) => {
          if (response.token != null) {
            this.step = this.step + 1;
            this.router.navigateByUrl('/signin');
          } else {
            alert(response.msg);
          }
        }
      );
    } else {
      console.log('Invalid form data:', this.doctorForm.errors);
      alert('Please fill in all required fields.');
    }
  }




  lat = 0;
  lng = 0;


  getUserLocation(): void {
    if (this.userRole === 'doctor') {
      alert('Vous êtes dans votre cabinet de travail ?');
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Get latitude and longitude
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;

            console.log('Latitude: ', this.lat);
            console.log('Longitude: ', this.lng);

            // Additional logic (e.g., save location or update UI)
          },
          (error) => {
            // Handle errors
            switch (error.code) {
              case error.PERMISSION_DENIED:
                console.error('Permission denied. Please enable location access.');
                alert('Please enable location access.');
                break;
              case error.POSITION_UNAVAILABLE:
                console.error('Position unavailable. Try again later.');
                alert('Position unavailable. Try again later.');
                break;
              case error.TIMEOUT:
                console.error('Request timed out. Check your internet connection.');
                alert('Request timed out. Check your internet connection.');
                break;
              default:
                console.error('Unknown error:', error.message);
                alert('An unknown error occurred. Please try again.');
            }
          },
          {
            enableHighAccuracy: true, // Use GPS if available
            timeout: 10000,          // Wait 10 seconds for response
            maximumAge: 0,           // Do not use cached position
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
        alert('Your browser does not support geolocation.');
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
    return null;
  }


  // Access individual form controls with casting

  get emailP(): FormControl {
    return this.patientForm.get('emailP') as FormControl;
  }

  get passWordP(): FormControl {
    return this.patientForm.get('passWordP') as FormControl;
  }

  get passWordD(): FormControl {
    return this.doctorForm.get('passWordD') as FormControl;
  }

  get confirmPasswordD(): FormControl {
    return this.doctorForm.get('confirmPasswordD') as FormControl;
  }

  get confirmPasswordP(): FormControl {
    return this.patientForm.get('confirmPasswordP') as FormControl;
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
    return this.doctorForm.get('emailD') as FormControl;
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

  nextStep(): void {
    if (this.userRole=='patient') {
      if (this.step === 1 && this.emailP.valid) {
        const enteredEmail = this.emailP.value;
        this.step = 2;
      }
      else if (this.step === 2 && this.patientForm.valid) {
         this.step = 3;
      }
      else {
        // Optionally, handle the case where the form is invalid on Step 2
        alert('Veuillez remplir correctement tous les champs.');
      }
    }else {
      if(this.step == 4){
        if (this.doctorForm.valid) {
          this.step = this.step+1;
        }
      }
      this.step = this.step+1;
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








}
