import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubxDashboardComponent } from './hubx-dashboard.component';

describe('HubxDashboardComponent', () => {
  let component: HubxDashboardComponent;
  let fixture: ComponentFixture<HubxDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubxDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
