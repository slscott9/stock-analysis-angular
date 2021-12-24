import { TestBed } from '@angular/core/testing';

import { UserInvestmentsService } from './user-investments.service';

describe('UserInvestmentsService', () => {
  let service: UserInvestmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInvestmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
