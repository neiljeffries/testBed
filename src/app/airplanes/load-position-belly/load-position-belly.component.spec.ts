import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPositionBellyComponent } from './load-position-belly.component';

describe('LoadPositionBellyComponent', () => {
  let component: LoadPositionBellyComponent;
  let fixture: ComponentFixture<LoadPositionBellyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadPositionBellyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPositionBellyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
