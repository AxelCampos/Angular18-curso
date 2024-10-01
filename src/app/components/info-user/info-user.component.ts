import { Component } from '@angular/core';
import { ImageComponent } from "../image/image.component";
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-info-user',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.css'
})
export class InfoUserComponent {
  constructor(private userService: UserService){
    this.user = this.userService.getUserConnected()?.name
  }
  user!: string
}
