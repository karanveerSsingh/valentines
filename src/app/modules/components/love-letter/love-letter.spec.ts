import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveLetterComponent } from './love-letter';

describe('LoveLetterComponent', () => {
  let component: LoveLetterComponent;
  let fixture: ComponentFixture<LoveLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveLetterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoveLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
