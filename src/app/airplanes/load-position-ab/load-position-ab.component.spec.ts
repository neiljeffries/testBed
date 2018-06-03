import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPositionAbComponent } from './load-position-ab.component';

describe('LoadPositionAbComponent', () => {
  let component: LoadPositionAbComponent;
  let fixture: ComponentFixture<LoadPositionAbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadPositionAbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPositionAbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
