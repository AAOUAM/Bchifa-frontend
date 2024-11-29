import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListdocteursComponent} from './listdocteurs/listdocteurs.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Listdocteur', component: ListdocteursComponent },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
];
