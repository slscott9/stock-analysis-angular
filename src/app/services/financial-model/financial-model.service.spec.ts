import { TestBed } from '@angular/core/testing';

import { FinancialModelService } from './financial-model.service';

describe('FinancialModelService', () => {
  let service: FinancialModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinancialModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
