import { Component, SimpleChange } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'employees-portal';
  formValid: boolean = false;
  label1: string = 'Label1';
  nombre: string = '123';

  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnChange(changes: SimpleChange) {
    console.log('ngOnChanges')
  }

  testClick(event: Event){
    console.log(event)
  }

  mostrarValor = () => {
    console.log(this.nombre)
  }
}
