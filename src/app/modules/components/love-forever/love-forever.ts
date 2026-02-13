import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-love-forever',
  templateUrl: './love-forever.html',
  styleUrls: ['./love-forever.scss'],
  standalone: true,
})
export class LoveForeverComponent {
  @Output() showLetter = new EventEmitter<void>();
  @Output() backToBanner = new EventEmitter<void>();

  showLoveLetter() {
    this.showLetter.emit();
  }

  goBackToBanner() {
    this.backToBanner.emit();
  }
}
