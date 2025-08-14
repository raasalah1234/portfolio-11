import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecurrentpasswordComponent } from './updatecurrentpassword.component';

describe('UpdatecurrentpasswordComponent', () => {
  let component: UpdatecurrentpasswordComponent;
  let fixture: ComponentFixture<UpdatecurrentpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatecurrentpasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecurrentpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
