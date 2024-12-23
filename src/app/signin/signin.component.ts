import {Component, OnInit} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router , RouterModule } from '@angular/router';
import {FormGroup} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {AuthService} from '../Services/auth.service';




@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, FormsModule, NgClass,NgIf],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})

export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter methods for form controls
  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  // Handle form submission
  onSubmit(): void {
    if (this.signinForm.valid) {
      const formData = this.signinForm.value;
      console.log('Form Data: ', formData);
      // You can add logic to send the login request to the backend
      // alot of logic hhhhhhhhhh
      this.authService.login(formData.email, 'MockUser');

      // Redirect to a different page after successful login (e.g., dashboard)
      this.router.navigateByUrl('');
    }
  }


}
