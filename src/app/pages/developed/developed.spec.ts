import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Developed } from './developed';

describe('Developed', () => {
  let component: Developed;
  let fixture: ComponentFixture<Developed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Developed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Developed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
