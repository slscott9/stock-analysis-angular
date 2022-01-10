import { TestBed } from '@angular/core/testing';

import { NotificationUtilityService } from './notification-utility.service';

describe('NotificationUtilityService', () => {
  let service: NotificationUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
