import { TestBed } from '@angular/core/testing';

import { GetallusersService } from './getallusers.service';

describe('GetallusersService', () => {
  let service: GetallusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
