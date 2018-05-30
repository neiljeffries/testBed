import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B767300Component } from './b767300.component';

describe('B767300Component', () => {
  let component: B767300Component;
  let fixture: ComponentFixture<B767300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B767300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B767300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
