import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private userService: UserService) { }

  hasToken = () => {
    console.log('hasToken', !!localStorage.getItem('token'));
    return !!localStorage.getItem('token');
  }

  login = (user: string, password: string) => {
    console.log('User: ', user);
    console.log('Password ', password);

    const userConnected = this.userService.listaUsuarios.filter(item => {
      return item.nick === user && item.password === password
    })

    if (userConnected.length > 0) {
      this.userService.usuarioConectado = {
        id: userConnected[0].id,
        name: userConnected[0].name
      };
      localStorage.setItem('token', JSON.stringify(userConnected[0]));
      return true;
    }

    return false;
  }
}
