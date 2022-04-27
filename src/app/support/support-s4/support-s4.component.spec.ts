import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportS4Component } from './support-s4.component';

describe('SupportS4Component', () => {
  let component: SupportS4Component;
  let fixture: ComponentFixture<SupportS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
