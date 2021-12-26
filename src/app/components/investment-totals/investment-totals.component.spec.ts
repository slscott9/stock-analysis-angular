import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentTotalsComponent } from './investment-totals.component';

describe('InvestmentTotalsComponent', () => {
  let component: InvestmentTotalsComponent;
  let fixture: ComponentFixture<InvestmentTotalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentTotalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentTotalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
