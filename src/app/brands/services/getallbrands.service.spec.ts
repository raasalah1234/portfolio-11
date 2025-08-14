import { TestBed } from '@angular/core/testing';

import { GetallbrandsService } from './getallbrands.service';

describe('GetallbrandsService', () => {
  let service: GetallbrandsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallbrandsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
