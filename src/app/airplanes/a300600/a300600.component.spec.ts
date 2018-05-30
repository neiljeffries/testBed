import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { A300600Component } from './a300600.component';

describe('A300600Component', () => {
  let component: A300600Component;
  let fixture: ComponentFixture<A300600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ A300600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(A300600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
