import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: MainComponent, canActivate: [AuthGuard]},
  {path: 'user-details/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
];
