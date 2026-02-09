import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HugDay } from './hug-day';

describe('HugDay', () => {
  let component: HugDay;
  let fixture: ComponentFixture<HugDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HugDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HugDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
