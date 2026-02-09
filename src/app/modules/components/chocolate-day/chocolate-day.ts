import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface AnimatedObject {
  left: string;
  animationDelay: string;
  animationDuration: string;
}

@Component({
  selector: 'app-chocolate-day',
  imports: [CommonModule],
  templateUrl: './chocolate-day.html',
  styleUrl: './chocolate-day.scss',
})
export class ChocolateDay implements OnInit {
  isYesClicked: boolean = false;
  backgroundElements: AnimatedObject[] = [];
  chocolateFall: AnimatedObject[] = [];
  noClickCount: number = 0;
  noButtonScale: number = 1;
  yesButtonScale: number = 1;

  ngOnInit() {
    this.backgroundElements = Array(30)
      .fill(0)
      .map(() => ({
        left: Math.random() * 100 + 'vw',
        animationDelay: Math.random() * 10 + 's',
        animationDuration: Math.random() * 5 + 5 + 's',
      }));
  }

  onNoClick() {
    this.noClickCount++;
    this.noButtonScale = 1 - this.noClickCount * 0.15;
    this.yesButtonScale = 1 + this.noClickCount * 0.15;
  }

  onYesClick() {
    this.isYesClicked = true;
    this.chocolateFall = Array(20)
      .fill(0)
      .map(() => ({
        left: Math.random() * 100 + 'vw',
        animationDelay: Math.random() * 2 + 's',
        animationDuration: Math.random() * 3 + 2 + 's',
      }));
  }
}
