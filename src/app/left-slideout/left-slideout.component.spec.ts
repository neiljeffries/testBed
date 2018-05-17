import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSlideoutComponent } from './left-slideout.component';

describe('LeftSlideoutComponent', () => {
  let component: LeftSlideoutComponent;
  let fixture: ComponentFixture<LeftSlideoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftSlideoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSlideoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
