import { Component} from '@angular/core';
import {FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [NgIf, FormsModule, NgClass, ReactiveFormsModule, RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  step = 1; // Control the current step
  form: FormGroup;

  showAlert = false;
  alertMessage: string = '';



  emailtest:String [] = ["aymanekenbouch@gmail.com","vvv@gmail.com"];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      birthDate: ['', [Validators.required, this.validateBirthDate]]
    });
  }



  // Custom validation for the birthdate >18 Years Old
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
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }

  get gender(): FormControl {
    return this.form.get('gender') as FormControl;
  }

  get firstName(): FormControl {
    return this.form.get('firstName') as FormControl;
  }

  get lastName(): FormControl {
    return this.form.get('lastName') as FormControl;
  }

  get birthDate(): FormControl {
    return this.form.get('birthDate') as FormControl;
  }



  // Navigation between steps
  /*
  nextStep(): void {
    if (this.step === 1 && this.email.valid) {
      const enteredEmail = this.email.value;

      // Check if email exists in the array
      if (this.emailtest.includes(enteredEmail)) {
        this.alertMessage = 'Cet email existe déjà chez nous !';
        console.log(this.alertMessage);
        this.showAlert = true;

        console.log("true ??");
        return; // Prevent moving to the next step
      }

      this.step = 2; // Proceed to the next step
    } else if (this.step === 2 && this.form.valid) {
      alert('Inscription terminée : ' + JSON.stringify(this.form.value));
    }
  }
  */

  nextStep(): void {
    if (this.step === 1 && this.email.valid) {
      const enteredEmail = this.email.value;

      // Check if email exists in the array
      if (this.emailtest.includes(enteredEmail)) {
        this.alertMessage = 'Cet email existe déjà chez nous !';
        this.showAlert = true;
        console.log(this.alertMessage);
        return; // Prevent moving to the next step
      }

      this.step = 2; // Proceed to Step 2 if the email is valid and doesn't exist already
    }
    else if (this.step === 2 && this.form.valid) {
      // If form is valid, proceed to Step 3 (success message)
      this.step = 3;
    }
    else {
      // Optionally, handle the case where the form is invalid on Step 2
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
