import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoveForeverComponent } from './love-forever';

describe('LoveForeverComponent', () => {
  let component: LoveForeverComponent;
  let fixture: ComponentFixture<LoveForeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoveForeverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoveForeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
