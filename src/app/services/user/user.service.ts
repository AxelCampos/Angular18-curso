import { Injectable } from '@angular/core';
import { Author } from '../../interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  usuarioConectado : Author = {id: 1, name: 'Axel'}

  getUserConnected = () => {
    return this.usuarioConectado;
  }
}
