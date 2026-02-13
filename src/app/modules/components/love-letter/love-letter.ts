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
export class LoveLetterComponent implements OnInit {
  @Output() celebrate = new EventEmitter<void>();
  @Output() backToPhoto = new EventEmitter<void>();
  @ViewChild('noteContent', { static: false }) noteContent!: ElementRef<HTMLDivElement>;

  Array = Array; // Make Array constructor available in template

  ngOnInit() {
    // Component initialization
  }

  onCelebrate() {
    this.celebrate.emit();
  }

  onGoBackToPhoto() {
    this.backToPhoto.emit();
  }
}
