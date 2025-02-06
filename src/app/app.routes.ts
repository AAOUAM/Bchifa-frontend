import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListdocteursComponent} from './listdocteurs/listdocteurs.component';
import {DocProfilComponent} from './doc-profil/doc-profil.component';
import {PatientProfileComponent} from './patient-profile/patient-profile.component';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {InfoComponent} from './info/info.component';
import { MessageComponent } from './message/message.component';
import { RendezvousComponent } from './rendez-vous/rendez-vous.component';
import {HomeallComponent} from './homeall/homeall.component';
import {HomedocComponent} from './homedoc/homedoc.component';
import {VediocallComponent} from './vediocall/vediocall.component';


export const routes: Routes = [

  { path: 'Listdocteur', component: ListdocteursComponent }, //patient
  { path: 'docteur/:id', component: DocProfilComponent }, //patient
  { path: 'patient-profile', component: PatientProfileComponent }, //patient + doc
  { path: 'info', component: InfoComponent }, // patient
  { path: 'messages', component: MessageComponent }, // patient +doc
  { path: 'rendez-vous', component: RendezvousComponent },  // doc
  {path : '', component: HomeallComponent },
  {path: 'signin' , component: SigninComponent }, //
  {path : 'signup', component: SignupComponent }, //
  {path : 'homepatient', component: HomeComponent },
  {path : 'homedocteur', component: HomedocComponent },
  {path : 'video' , component : VediocallComponent}




];
