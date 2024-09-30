import { Component } from '@angular/core';
import { CommentComponent } from '../comment/comment.component';
import { FormsModule } from '@angular/forms';
import { Comment } from '../../interfaces/comment';
import { Author } from '../../interfaces/author';
import { CommentsService } from '../../services/comments/comments.service';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommentComponent, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  constructor(private commentService: CommentsService){}
  comment: string = '';
  comments !: Comment[];

  ngOnInit() {
    this.comments = this.commentService.getAll()
  }

  addNewComment = (event: any) => {
    this.commentService.addComment(this.comment)

    this.comment = "";
  }

  removeComment =(index: number) => {
    this.commentService.removeComment(index);
  }
}
