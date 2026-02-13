import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-love-letter',
  templateUrl: './love-letter.html',
  styleUrls: ['./love-letter.scss'],
  standalone: true,
})
export class LoveLetterComponent {
  @Output() celebrate = new EventEmitter<void>();
  @Output() backToPhoto = new EventEmitter<void>();

  Array = Array; // Make Array constructor available in template

  onCelebrate() {
    this.celebrate.emit();
  }

  onGoBackToPhoto() {
    this.backToPhoto.emit();
  }
}
