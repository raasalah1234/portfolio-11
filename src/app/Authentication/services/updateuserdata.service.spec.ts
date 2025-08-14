import { TestBed } from '@angular/core/testing';

import { UpdateuserdataService } from './updateuserdata.service';

describe('UpdateuserdataService', () => {
  let service: UpdateuserdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateuserdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
