import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportS3Component } from './support-s3.component';

describe('SupportS3Component', () => {
  let component: SupportS3Component;
  let fixture: ComponentFixture<SupportS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
