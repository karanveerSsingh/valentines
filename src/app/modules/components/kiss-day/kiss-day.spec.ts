import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KissDay } from './kiss-day';

describe('KissDay', () => {
  let component: KissDay;
  let fixture: ComponentFixture<KissDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KissDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KissDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
