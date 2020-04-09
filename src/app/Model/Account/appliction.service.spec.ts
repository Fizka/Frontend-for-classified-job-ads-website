import { TestBed } from '@angular/core/testing';

import { ApplictionService } from './appliction.service';

describe('ApplictionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplictionService = TestBed.get(ApplictionService);
    expect(service).toBeTruthy();
  });
});
