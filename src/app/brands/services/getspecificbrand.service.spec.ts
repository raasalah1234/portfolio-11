import { TestBed } from '@angular/core/testing';

import { GetspecificbrandService } from './getspecificbrand.service';

describe('GetspecificbrandService', () => {
  let service: GetspecificbrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetspecificbrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
