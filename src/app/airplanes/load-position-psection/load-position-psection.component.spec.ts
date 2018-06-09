import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadPositionPsectionComponent } from './load-position-psection.component';

describe('LoadPositionPsectionComponent', () => {
  let component: LoadPositionPsectionComponent;
  let fixture: ComponentFixture<LoadPositionPsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadPositionPsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadPositionPsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
