import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B747400Component } from './b747400.component';

describe('B747400Component', () => {
  let component: B747400Component;
  let fixture: ComponentFixture<B747400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B747400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B747400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
