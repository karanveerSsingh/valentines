import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChocolateDay } from './chocolate-day';

describe('ChocolateDay', () => {
  let component: ChocolateDay;
  let fixture: ComponentFixture<ChocolateDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChocolateDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChocolateDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
