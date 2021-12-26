import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInvestmentsComponent } from './home-investments.component';

describe('HomeInvestmentsComponent', () => {
  let component: HomeInvestmentsComponent;
  let fixture: ComponentFixture<HomeInvestmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInvestmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInvestmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
