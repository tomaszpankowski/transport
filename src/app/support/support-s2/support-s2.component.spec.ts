import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportS2Component } from './support-s2.component';

describe('SupportS2Component', () => {
  let component: SupportS2Component;
  let fixture: ComponentFixture<SupportS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
