import { TestBed } from '@angular/core/testing';

import { CoinmarketService } from './coinmarket.service';

describe('CoinmarketService', () => {
  let service: CoinmarketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinmarketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
