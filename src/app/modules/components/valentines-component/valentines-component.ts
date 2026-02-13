import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import 'animate.css';
import { CeleHappy } from '../cele-happy/cele-happy';
import { Lines } from '../lines/lines';
import { RoseDay } from '../rose-day/rose-day';
import { ProposeDay } from '../propose-day/propose-day';
import { ChocolateDay } from '../chocolate-day/chocolate-day';
import { TeddyDay } from '../teddy-day/teddy-day';
import { PromiseDay } from '../promise-day/promise-day';
import { HugDay } from '../hug-day/hug-day';
import { KissDay } from '../kiss-day/kiss-day';
import { ValentineDay } from '../valentine-day/valentine-day';
@Component({
  selector: 'app-valentines-component',
  imports: [
    CommonModule,
    CeleHappy,
    Lines,
    RoseDay,
    ProposeDay,
    ChocolateDay,
    TeddyDay,
    PromiseDay,
    HugDay,
    KissDay,
    ValentineDay,
  ],
  templateUrl: './valentines-component.html',
  styleUrl: './valentines-component.scss',
})
export class ValentinesComponent implements OnInit {
  @ViewChild('noBtn') noBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('card') card!: ElementRef<HTMLDivElement>;
  heartList: any[] = [];
  showScheme = signal(false);
  isYesClicked = false;
  noButtonText = 'NO';
  isLastNoMessage = false;
  private noMessageIndex = 0;
  showArrow = true;

  currentDate = new Date();
  valentineDays = [
    { name: 'Rose Day', date: 7, component: 'rose', show: false, past: false },
    { name: 'Propose Day', date: 8, component: 'propose', show: false, past: false },
    { name: 'Chocolate Day', date: 9, component: 'chocolate', show: false, past: false },
    { name: 'Teddy Day', date: 10, component: 'teddy', show: false, past: false },
    { name: 'Promise Day', date: 11, component: 'promise', show: false, past: false },
    { name: 'Hug Day', date: 12, component: 'hug', show: false, past: false },
    { name: 'Kiss Day', date: 13, component: 'kiss', show: false, past: false },
    { name: 'Valentine Day', date: 14, component: 'valentine', show: false, past: false },
  ];

  private noMessages = [
    'NO',
    'Are you sure?',
    'Think again',
    'Really?',
    'Please?',
    "Don't do this to me!",
    'Really sure??',
    'Are you positive?',
    'Pookie please...',
    'Just think about it!',
    'If you say no, I will be really sad...',
    'I will be very very very sad...',
    'Ok fine, I will stop asking...',
    'Just kidding, say yes please! ❤️',
    'I will be very sad...',
  ];

  ngOnInit() {
    setTimeout(() => this.showScheme.set(true), 30_00);
    this.heartList = Array(50)
      .fill(0)
      .map(() => ({
        left: Math.random() * 100 + 'vw',
        animationDelay: Math.random() * 10 + 's',
        fontSize: Math.random() * 12 + 12 + 'px',
      }));
    this.checkValentineDay();
  }

  checkValentineDay() {
    const today = this.currentDate.getDate();
    const month = this.currentDate.getMonth() + 1;

    if (month === 2) {
      this.valentineDays.forEach((day) => {
        if (day.date < today) {
          day.past = true;
        } else if (day.date === today) {
          day.show = true;
        }
      });
    }
  }

  showDay(day: any) {
    day.show = true;
  }

  playSound() {
    // const audio = new Audio(
    //   '../../../../assets/tum-mile-tum-mile-original-motion-picturetrack-320-kbps_BHj8W2oK.mp3',
    // );
    const audio = new Audio('../../../../assets/mere-bina-pendujattcomse-1_4ospvCii.mp3');
    audio.play();
    this.isYesClicked = true;
  }
  changeNoText() {
    const audio = new Audio('assets/mixkit-correct-answer-tone-2870.wav');
    audio.play();
    this.noMessageIndex++;
    this.noButtonText = this.noMessages[this.noMessageIndex];
    if (this.noMessageIndex === this.noMessages.length - 1) {
      this.isLastNoMessage = true;
    }
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    if (target.scrollTop > 50) {
      this.showArrow = false;
    }
  }
}
