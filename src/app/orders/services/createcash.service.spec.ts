import { TestBed } from '@angular/core/testing';

import { CreatecashService } from './createcash.service';

describe('CreatecashService', () => {
  let service: CreatecashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatecashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
