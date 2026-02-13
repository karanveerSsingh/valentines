import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.html',
  styleUrls: ['./celebration.scss'],
  standalone: true,
})
export class CelebrationComponent {
  @Output() backToLetter = new EventEmitter<void>();

  onGoBackToLetter() {
    this.backToLetter.emit();
  }
}
