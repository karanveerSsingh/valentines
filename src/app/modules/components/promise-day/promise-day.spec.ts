import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseDay } from './promise-day';

describe('PromiseDay', () => {
  let component: PromiseDay;
  let fixture: ComponentFixture<PromiseDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
