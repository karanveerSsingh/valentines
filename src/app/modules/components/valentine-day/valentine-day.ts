import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoveForeverComponent } from '../love-forever/love-forever';
import { LoveLetterComponent } from '../love-letter/love-letter';
import { CelebrationComponent } from '../celebration/celebration';

@Component({
  selector: 'app-valentine-day',
  imports: [CommonModule, LoveForeverComponent, LoveLetterComponent, CelebrationComponent],
  templateUrl: './valentine-day.html',
  styleUrl: './valentine-day.scss',
})
export class ValentineDay {
  hearts = Array(6);
  showBanner = true;
  showLetter = false;
  showCelebration = false;
  Array = Array; // Make Array constructor available in template

  scrollToContent() {
    this.showBanner = !this.showBanner;
    this.showLetter = false;
    this.showCelebration = false;
  }

  goBackToBanner() {
    this.showBanner = true;
    this.showLetter = false;
    this.showCelebration = false;
  }

  showLoveLetter() {
    this.showLetter = true;
    this.showBanner = false;
    this.showCelebration = false;
  }

  goBackToPhoto() {
    this.showLetter = false;
    this.showBanner = false;
    this.showCelebration = false;
  }

  celebrate() {
    this.showCelebration = true;
    this.showLetter = false;
    this.showBanner = false;
  }

  goBackToLetter() {
    this.showCelebration = false;
    this.showLetter = true;
  }
}
