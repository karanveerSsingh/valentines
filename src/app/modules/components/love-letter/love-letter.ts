import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-love-letter',
  templateUrl: './love-letter.html',
  styleUrls: ['./love-letter.scss'],
  standalone: true,
})
export class LoveLetterComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() celebrate = new EventEmitter<void>();
  @Output() backToPhoto = new EventEmitter<void>();
  @ViewChild('noteContent', { static: false }) noteContent!: ElementRef<HTMLDivElement>;

  Array = Array; // Make Array constructor available in template

  private autoScrollInterval: any;
  private isUserScrolling = false;
  private userScrollTimeout: any;

  ngOnInit() {
    // Component initialization
  }

  ngAfterViewInit() {
    this.startAutoScroll();
  }

  ngOnDestroy() {
    this.stopAutoScroll();
    if (this.userScrollTimeout) {
      clearTimeout(this.userScrollTimeout);
    }
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      if (!this.isUserScrolling && this.noteContent) {
        const element = this.noteContent.nativeElement;

        // Check if we've reached the bottom
        if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
          // Reset to top
          element.scrollTop = 0;
        } else {
          // Scroll down slowly
          element.scrollTop += 1;
        }
      }
    }, 50); // Adjust speed as needed (lower = faster)
  }

  stopAutoScroll() {
    if (this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  onUserScroll() {
    this.isUserScrolling = true;

    // Clear existing timeout
    if (this.userScrollTimeout) {
      clearTimeout(this.userScrollTimeout);
    }

    // Resume auto-scroll after user stops scrolling for 3 seconds
    this.userScrollTimeout = setTimeout(() => {
      this.isUserScrolling = false;
    }, 40);
  }

  onCelebrate() {
    this.celebrate.emit();
  }

  onGoBackToPhoto() {
    this.backToPhoto.emit();
  }
}
