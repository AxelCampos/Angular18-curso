import { Injectable } from '@angular/core';
import { Comment } from '../../interfaces/comment';
import { Author } from '../../interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  listTasks: Comment[] = [
    {text: 'Este es el primer comentario', author: {id:1, name: 'Axel'}, date: '09-09-2024'},
    {text: 'Este es el segundo comentario', author: {id: 2, name: 'Mari Carmen'}, date: '09-09-2024'},
    {text: 'Este es el tercer comentario', author: {id:3, name: 'Jose Luis'}, date: '09-09-2024'},
  ];

  getAll = () => {
    return this.listTasks;
  }

  addComment = (comment: string) => {
    const author: Author = {id: 1, name: 'Axel'};
    const date: string =  '24-09-2024'

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
