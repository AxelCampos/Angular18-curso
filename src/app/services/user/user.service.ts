import { Injectable } from '@angular/core';
import { Author } from '../../interfaces/author';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    const userToken = localStorage.getItem('token');
    let user: any = {};
    if (userToken) {
      user = JSON.parse(userToken);
      this.usuarioConectado = {
        id: user.id,
        name: user.name
      }
    }
    this.getDataUsuarios();
  }
  listadoUsuarios2: any[] = []
  usuarioConectado !: Author
  listaUsuarios = [
    {id: 1, name: 'Axel Campos Bonnet', phone: '1234567890', email: 'axel@gmail.com', address: 'Calle 123', company: {name: 'Company 1', catchPhrase: 'Catch Phrase 1', bs: 'BS 1'},nick:'acampos', password: '1234'},
    {id: 2, name: 'Mari Carmen', phone: '1234567890', email: 'mari-carmen@gmail.com', address: 'Calle 123', company: {name: 'Company 1', catchPhrase: 'Catch Phrase 1', bs: 'BS 1'},nick:'mcarmen',  password: '1234'},
    {id: 3, name: 'Jose Luis', phone: '1234567890', email: 'joseluis@gmail.com', address: 'Calle 123', company: {name: 'Company 1', catchPhrase: 'Catch Phrase 1', bs: 'BS 1'}, nick:'jluis', password: '1234'}
  ]

  getUserConnected = () => {
    return this.usuarioConectado;
  }

  getUserById = (id: number) => {
    return this.listaUsuarios.find(user => user.id === id);
  }

  getDataUsuarios = () => {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      (response: any[]) => {
        this.listadoUsuarios2 = response; // Aquí manejas la respuesta
        console.log("🚀 ~ UserService ~ this.listadoUsuarios2:", this.listadoUsuarios2)
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
