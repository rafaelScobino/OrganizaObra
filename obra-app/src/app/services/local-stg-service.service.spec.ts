import { TestBed } from '@angular/core/testing';

import { LocalStgServiceService } from './local-stg-service.service';

describe('LocalStgServiceService', () => {
  let service: LocalStgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
