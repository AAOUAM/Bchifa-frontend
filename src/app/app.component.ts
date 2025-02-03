import {Component, NgModule} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';
import {DocumentsComponent} from './documents/documents.component';
import {FormsModule} from '@angular/forms';
import {VediocallComponent} from './vediocall/vediocall.component';
import {ListdocteursComponent} from './listdocteurs/listdocteurs.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {MessageComponent} from './message/message.component';
import { RendezvousComponent } from "./rendez-vous/rendez-vous.component";
import { HttpClientModule } from '@angular/common/http';

import {NavbarStateService} from './shared/navbar-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,HttpClientModule, FooterComponent, HomeComponent, InfoComponent, DocumentsComponent, FormsModule, VediocallComponent, ListdocteursComponent, SigninComponent, SignupComponent,MessageComponent,RendezvousComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router, private navbarStateService: NavbarStateService) {
    // Listen for route changes
    this.router.events.subscribe(() => {
      const showButtons = this.router.url !== '/'; // Hide buttons on the homepage
      this.navbarStateService.setShowButtons(showButtons);
    });
  }


}
