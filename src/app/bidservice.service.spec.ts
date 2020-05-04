import { TestBed } from '@angular/core/testing';

import { BidserviceService } from './bidservice.service';

describe('BidserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BidserviceService = TestBed.get(BidserviceService);
    expect(service).toBeTruthy();
  });
});
