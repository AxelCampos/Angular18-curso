import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text !: string;
  @Input({required: true}) action !: () => void;
  //@Output() outputAction = new EventEmitter<void>();
}
