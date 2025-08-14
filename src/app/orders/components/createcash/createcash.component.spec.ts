import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecashComponent } from './createcash.component';

describe('CreatecashComponent', () => {
  let component: CreatecashComponent;
  let fixture: ComponentFixture<CreatecashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatecashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
