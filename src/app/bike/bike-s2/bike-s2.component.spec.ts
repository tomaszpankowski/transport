import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeS2Component } from './bike-s2.component';

describe('BikeS2Component', () => {
  let component: BikeS2Component;
  let fixture: ComponentFixture<BikeS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
