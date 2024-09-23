import { Component } from '@angular/core';
import { ImageComponent } from "../image/image.component";

@Component({
  selector: 'app-info-user',
  standalone: true,
  imports: [ImageComponent],
  templateUrl: './info-user.component.html',
  styleUrl: './info-user.component.css'
})
export class InfoUserComponent {
  firstName: string = 'Axel Iago'
  lastName: string = 'Campos Bonnet'
}
