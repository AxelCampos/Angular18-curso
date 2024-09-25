import { Component } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { FormsModule } from '@angular/forms';


interface Author {
  id: number
  name: string
}

interface Comment {
  text: string;
  author: Author;
  date: string
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommentComponent, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  listTasks: Comment[] = [
    {text: 'Este es el primer comentario', author: {id:1, name: 'Axel'}, date: '09-09-2024'},
    {text: 'Este es el segundo comentario', author: {id: 2, name: 'Mari Carmen'}, date: '09-09-2024'},
    {text: 'Este es el tercer comentario', author: {id:3, name: 'Jose Luis'}, date: '09-09-2024'},
  ];

  isDisabled: boolean = true;
  comment: string = '';

  addNewComment = (event: any) => {
    const author: Author = {id: 1, name: 'Axel'};
    const date: string =  '24-09-2024'

    this.listTasks.push({
      text: this.comment,
      author: author,
      date: date
    })

    this.comment = "";
    this.isDisabled = true;
  }

  onInputChangeComment = (event: any) => {
    this.isDisabled = !(this.comment.length > 0);
  }

  removeComment =(index: number) => {
    return () => {
      this.listTasks.splice(index, 1);
    }
  }
}
