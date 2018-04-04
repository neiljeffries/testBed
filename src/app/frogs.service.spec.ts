import { TestBed, inject } from '@angular/core/testing';

import { FrogsService } from './frogs.service';

describe('FrogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrogsService]
    });
  });

  it('should be created', inject([FrogsService], (service: FrogsService) => {
    expect(service).toBeTruthy();
  }));
});
