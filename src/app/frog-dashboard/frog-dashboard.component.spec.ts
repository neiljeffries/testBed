import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrogDashboardComponent } from './frog-dashboard.component';

describe('FrogDashboardComponent', () => {
  let component: FrogDashboardComponent;
  let fixture: ComponentFixture<FrogDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrogDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrogDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
