import {Component, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {InfoComponent} from './info/info.component';
import {DocumentsComponent} from './documents/documents.component';
import {FormsModule} from '@angular/forms';
import {VediocallComponent} from './vediocall/vediocall.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent, InfoComponent, DocumentsComponent, FormsModule, VediocallComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
