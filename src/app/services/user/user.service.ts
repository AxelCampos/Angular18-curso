import { Injectable } from '@angular/core';
import { Author } from '../../interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  usuarioConectado : Author = {id: 1, name: 'Axel Campos Bonnet'}
  listaUsuarios = [
    {id: 1, name: 'Axel Campos Bonnet', phone: '1234567890', email: 'axel@gmail.com', address: 'Calle 123', company: {name: 'Company 1', catchPhrase: 'Catch Phrase 1', bs: 'BS 1'}},
    {id: 2, name: 'Mari Carmen', phone: '1234567890', email: 'mari-carmen@gmail.com', address: 'Calle 123', company: {name: 'Company 1', catchPhrase: 'Catch Phrase 1', bs: 'BS 1'}},
    {id: 3, name: 'Jose Luis', phone: '1234567890', email: 'joseluis@gmail.com', address: 'Calle 123', company: {name: 'Company 1', catchPhrase: 'Catch Phrase 1', bs: 'BS 1'}}
  ]

  getUserConnected = () => {
    return this.usuarioConectado;
  }

  getUserById = (id: number) => {
    return this.listaUsuarios.find(user => user.id === id);
  }
}
