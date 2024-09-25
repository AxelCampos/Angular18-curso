import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() text !: string;
  @Input() author ?: string;
  @Input() date ?: string;
  @Input() callback?: () => void;

  removeComment = () => {
    if(this.callback)
      this.callback();
  }
}
