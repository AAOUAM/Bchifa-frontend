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
  constructor(private router: Router, private authService: AuthService, private userTypeService: TypeuserService ,private navbarStateService: NavbarStateService ) {


  }

  showButtons: boolean = true;
  patient = false;




  ngOnInit(): void {


    this.navbarStateService.showButtons$.subscribe((state) => {
      this.showButtons = state;
    });
    // Simulate authentication subscription
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


  login() {
    this.router.navigateByUrl('/signin');
  }

  /*
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

   */






}
