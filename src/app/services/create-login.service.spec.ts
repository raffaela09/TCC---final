import { TestBed } from '@angular/core/testing';

import { CreateLoginService } from './create-login.service';

describe('CreateLoginService', () => {
  let service: CreateLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
