import { TestBed } from '@angular/core/testing';

import { MessService } from './mess.service';

describe('MessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessService = TestBed.get(MessService);
    expect(service).toBeTruthy();
  });
});
