import { TestBed, inject } from '@angular/core/testing';

import { CivicService } from './civic.service';

describe('CivicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CivicService]
    });
  });

  it('should be created', inject([CivicService], (service: CivicService) => {
    expect(service).toBeTruthy();
  }));
});
