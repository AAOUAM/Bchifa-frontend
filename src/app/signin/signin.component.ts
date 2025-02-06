import {Component, OnInit} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router , RouterModule } from '@angular/router';
import {FormGroup} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {AuthService} from '../Services/auth.service';
import {TypeuserService} from '../Services/typeuser.service';




@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, FormsModule, NgClass,NgIf],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent implements OnInit {

  signinForm: FormGroup;
  userRole: 'doctor' | 'patient' | null = null;


  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private typeUser : TypeuserService) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.userRole = this.typeUser.getUserRole();
  }

  // Getter methods for form controls
  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }


  login(): void {

    if(this.userRole == 'patient') {
      if (this.signinForm.valid) {
        const formData = this.signinForm.value;
        this.authService.loginPatient(formData.email, formData.password).subscribe(
          (response) => {
            if(response.token != null){
              this.router.navigateByUrl('/homepatient');
              console.log("Signed In successfully Patient");
            }
            else {
              console.log("error");
            }
          }
        )
      }
    }

    else if (this.userRole == 'doctor') {
      if (this.signinForm.valid) {
        const formData = this.signinForm.value;
        this.authService.loginDoctor(formData.email, formData.password).subscribe(
          (response) => {
            if(response.token != null){
              this.router.navigateByUrl('/homedocteur');
              console.log(response.token);
              console.log("Signed In successfully Doctor ");
            }
            else {
              console.log("error");
            }
          }
        )
      }
    }
  }


}
