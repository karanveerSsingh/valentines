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
  promises = [
    'I promise to always be with you.',
    'I promise to make you smile, even on the toughest days.',
    'I promise to support your dreams and ambitions.',
    'I promise to be your best friend, always and forever.',
    'I promise to love you unconditionally.',
    'I promise to always listen to you.',
    'I promise to share my fries with you.',
  ];

  onShowPromisesClick() {
    this.showPromises = !this.showPromises;
  }
}
