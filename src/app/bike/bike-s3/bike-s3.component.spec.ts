import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeS3Component } from './bike-s3.component';

describe('BikeS3Component', () => {
  let component: BikeS3Component;
  let fixture: ComponentFixture<BikeS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
