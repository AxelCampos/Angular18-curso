import { Injectable } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import { Author } from '../../interfaces/author';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private userService: UserService) { }

  listTasks: Comment[] = [
    {text: 'Este es el primer comentario', author: {id:1, name: 'Axel Campos Bonnet'}, date: '09/09/2024, 11:00'},
    {text: 'Este es el segundo comentario', author: {id: 2, name: 'Mari Carmen'}, date: '09/09/2024, 15:00'},
    {text: 'Este es el tercer comentario', author: {id:3, name: 'Jose Luis'}, date: '10/09/2024, 11:00'},
  ];

  getAll = () => {
    return this.listTasks;
  }

  addComment = (comment: string) => {
    const author: Author = this.userService.getUserConnected();
    const date: string = new Date().toLocaleString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });

    this.listTasks.push({
      text: comment,
      author: author,
      date: date
    })
  }

  removeComment = (index: number) => {
    this.listTasks.splice(index, 1);
  }
}
