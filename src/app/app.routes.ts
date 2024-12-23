import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListdocteursComponent} from './listdocteurs/listdocteurs.component';
import {DocProfilComponent} from './doc-profil/doc-profil.component';
import {PatientProfileComponent} from './patient-profile/patient-profile.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {InfoComponent} from './info/info.component';

export const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Listdocteur', component: ListdocteursComponent },
  { path: 'docteur/:id', component: DocProfilComponent },
  { path: 'patient-profile', component: PatientProfileComponent },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {path: 'signin' , component: SigninComponent },
  {path : 'signup', component: SignupComponent },
  {path : 'info', component: InfoComponent }

];
