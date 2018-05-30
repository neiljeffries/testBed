import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B757200Component } from './b757200.component';

describe('B757200Component', () => {
  let component: B757200Component;
  let fixture: ComponentFixture<B757200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B757200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B757200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
