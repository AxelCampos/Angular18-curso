import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Comment } from '../../interfaces/comment';
import { UserService } from '../../services/user/user.service';
import { Author } from '../../interfaces/author';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { CheckUserConnectedDirective } from '../../directives/checkUserConnected/check-user-connected.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [ButtonComponent, TruncatePipe, CheckUserConnectedDirective, RouterLink],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  constructor(private userService: UserService){}

  @Input() comment !: Comment;
  @Output() usuarioBorrado = new EventEmitter<void>();

  usuarioConectado !: Author
  ngOnInit () {
    this.usuarioConectado = this.userService.getUserConnected();
  }

  removeComment = () => {
    this.usuarioBorrado.emit();
  }
}
