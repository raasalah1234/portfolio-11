import { TestBed } from '@angular/core/testing';

import { AllSubcategoryService } from './all-subcategory.service';

describe('AllSubcategoryService', () => {
  let service: AllSubcategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllSubcategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
