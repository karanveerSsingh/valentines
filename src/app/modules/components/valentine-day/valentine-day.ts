import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-valentine-day',
  imports: [CommonModule],
  templateUrl: './valentine-day.html',
  styleUrl: './valentine-day.scss',
})
export class ValentineDay {
  hearts = Array(6);
}
