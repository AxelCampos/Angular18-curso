import { Component } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  listTasks: any[] = [
    {id: '1', name: 'Titulo1'},
    {id: '2', name: 'Titulo2'},
    {id: '3', name: 'Titulo3'},
  ]
}
