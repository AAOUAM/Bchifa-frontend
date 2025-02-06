import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';
import {AuthService} from '../Services/auth.service';
import {TypeuserService} from '../Services/typeuser.service';
import {NavbarStateService} from '../shared/navbar-state.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  isUserAuthenticated: boolean = false;
  userEmail: string | null = null;
  showButtons: boolean = true;
  patient = false;



  constructor(private router: Router, private authService: AuthService, private userTypeService: TypeuserService ,private navbarStateService: NavbarStateService ) {


  }






  ngOnInit(): void {
    // Subscribe to navbar state for showing/hiding buttons
    this.navbarStateService.showButtons$.subscribe((state) => {
      this.showButtons = state;
    });

    this.authService.user$.subscribe((user) => {
      if (user) {
        this.isUserAuthenticated = true;
        this.userEmail = user.email;
      } else {
        this.isUserAuthenticated = false;
        this.userEmail = null;
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }





}
