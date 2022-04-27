import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportS1Component } from './support-s1.component';

describe('SupportS1Component', () => {
  let component: SupportS1Component;
  let fixture: ComponentFixture<SupportS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
