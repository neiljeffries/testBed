import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MD11Component } from './md11.component';

describe('MD11Component', () => {
  let component: MD11Component;
  let fixture: ComponentFixture<MD11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MD11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MD11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
