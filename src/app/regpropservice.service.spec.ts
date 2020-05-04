import { TestBed } from '@angular/core/testing';

import { RegpropserviceService } from './regpropservice.service';

describe('RegpropserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegpropserviceService = TestBed.get(RegpropserviceService);
    expect(service).toBeTruthy();
  });
});
