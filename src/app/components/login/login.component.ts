import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService, private router: Router) {}
  user!: string;
  password!: string;

  login = () => {
    if(this.loginService.login(this.user, this.password)) {
      this.router.navigate([''])
    }
  }
}
