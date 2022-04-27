import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeS1Component } from './bike-s1.component';

describe('BikeS1Component', () => {
  let component: BikeS1Component;
  let fixture: ComponentFixture<BikeS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
