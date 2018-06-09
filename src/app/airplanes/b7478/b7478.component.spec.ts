import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B7478Component } from './b7478.component';

describe('B7478Component', () => {
  let component: B7478Component;
  let fixture: ComponentFixture<B7478Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B7478Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B7478Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
