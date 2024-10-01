import { Component, SimpleChange } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showHeader: boolean = true;
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/login' || event.urlAfterRedirects === '/login') {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      });
  }
}
