import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPositionTopComponent } from './load-position-top.component';

describe('LoadPositionTopComponent', () => {
  let component: LoadPositionTopComponent;
  let fixture: ComponentFixture<LoadPositionTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadPositionTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPositionTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
