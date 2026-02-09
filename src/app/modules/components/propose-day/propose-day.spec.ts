import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeDay } from './propose-day';

describe('ProposeDay', () => {
  let component: ProposeDay;
  let fixture: ComponentFixture<ProposeDay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposeDay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposeDay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
