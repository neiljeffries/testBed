
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { FidsDashboardComponent } from './fids-dashboard.component';

describe('FidsDashboardComponent', () => {
  let component: FidsDashboardComponent;
  let fixture: ComponentFixture<FidsDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FidsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FidsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
