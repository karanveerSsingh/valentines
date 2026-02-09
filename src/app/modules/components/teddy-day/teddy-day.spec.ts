import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeddyDay } from './teddy-day';

describe('TeddyDay', () => {
  let component: TeddyDay;
  let fixture: ComponentFixture<TeddyDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeddyDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeddyDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
