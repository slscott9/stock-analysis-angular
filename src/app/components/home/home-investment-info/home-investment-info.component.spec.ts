import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInvestmentInfoComponent } from './home-investment-info.component';

describe('HomeInvestmentInfoComponent', () => {
  let component: HomeInvestmentInfoComponent;
  let fixture: ComponentFixture<HomeInvestmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInvestmentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInvestmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
