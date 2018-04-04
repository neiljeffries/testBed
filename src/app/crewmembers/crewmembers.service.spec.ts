import { TestBed, inject } from '@angular/core/testing';

import { CrewmembersService } from './crewmembers.service';

describe('CrewmembersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrewmembersService]
    });
  });

  it('should be created', inject([CrewmembersService], (service: CrewmembersService) => {
    expect(service).toBeTruthy();
  }));
});
