import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewmembersComponent } from './crewmembers.component';

describe('CrewmembersComponent', () => {
  let component: CrewmembersComponent;
  let fixture: ComponentFixture<CrewmembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewmembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewmembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
