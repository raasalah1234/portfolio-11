import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetspecificbrandComponent } from './getspecificbrand.component';

describe('GetspecificbrandComponent', () => {
  let component: GetspecificbrandComponent;
  let fixture: ComponentFixture<GetspecificbrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetspecificbrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetspecificbrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
