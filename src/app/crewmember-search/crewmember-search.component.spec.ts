import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewmemberSearchComponent } from './crewmember-search.component';

describe('CrewmemberSearchComponent', () => {
  let component: CrewmemberSearchComponent;
  let fixture: ComponentFixture<CrewmemberSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewmemberSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewmemberSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
