import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainComponent},
  {path: 'user-details/:id', component: UserDetailsComponent},
];
