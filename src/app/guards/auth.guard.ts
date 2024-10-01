import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root',  // Asegúrate de que esté disponible en toda la aplicación
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.loginService.hasToken()) {
      return true;
    } else {
      console.log('No token, redirecting to login');
      this.router.navigate(['/login']);  // Redirecciona si no hay token
      return false;
    }
  }
}
