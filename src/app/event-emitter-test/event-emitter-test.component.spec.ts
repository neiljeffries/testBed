import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterTestComponent } from './event-emitter-test.component';

describe('EventEmitterTestComponent', () => {
  let component: EventEmitterTestComponent;
  let fixture: ComponentFixture<EventEmitterTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
