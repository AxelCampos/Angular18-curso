import { Component } from '@angular/core';
import { ImageComponent } from "../image/image.component";
import { InfoUserComponent } from "../info-user/info-user.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ImageComponent, InfoUserComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
