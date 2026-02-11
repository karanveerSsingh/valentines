import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promise-day',
  imports: [CommonModule],
  templateUrl: './promise-day.html',
  styleUrl: './promise-day.scss',
})
export class PromiseDay {
  showPromises = false;
  currentPromiseIndex = 0;
  promises = [
    'I promise to always be with you.',
    'I promise to make you smile, even on the toughest days.',
    'I promise to support your dreams and ambitions.',
    'I promise to be your Boyfriend, always and forever.',
    'I promise to love you unconditionally.',
    'I promise to always listen to you.',
    'I promise to share my fries with you.',
    'I promise to always be honest with you.',
    'I promise to make you laugh every day.',
    'I promise Muje se jitna hoga usse jyda khush rakhunga aapko.',
    'I promise to never stop loving you.',
  ];

  onShowPromisesClick() {
    if (!this.showPromises) {
      this.showPromises = true;
      this.currentPromiseIndex = 0;
    } else {
      this.currentPromiseIndex++;
      if (this.currentPromiseIndex >= this.promises.length) {
        this.showPromises = false;
        this.currentPromiseIndex = 0;
      }
    }
  }

  getCurrentPromise() {
    return this.promises[this.currentPromiseIndex];
  }

  getButtonText() {
    if (!this.showPromises) {
      return 'Show My Promises';
    } else if (this.currentPromiseIndex < this.promises.length - 1) {
      return 'Next Promise';
    } else {
      return 'Finish';
    }
  }
}
