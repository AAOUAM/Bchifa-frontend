import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListdocteursComponent} from './listdocteurs/listdocteurs.component';
import {DocProfilComponent} from './doc-profil/doc-profil.component';
import {PatientProfileComponent} from './patient-profile/patient-profile.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Listdocteur', component: ListdocteursComponent },
  { path: 'docteur/:id', component: DocProfilComponent },
  { path: 'patient-profile', component: PatientProfileComponent },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  }
];
