import { TestBed } from '@angular/core/testing';

import { CreateGuard } from './create.guard';

describe('CreateGuardService', () => {
  let service: CreateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
