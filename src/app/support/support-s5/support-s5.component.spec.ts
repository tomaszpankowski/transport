import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportS5Component } from './support-s5.component';

describe('SupportS5Component', () => {
  let component: SupportS5Component;
  let fixture: ComponentFixture<SupportS5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportS5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportS5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
