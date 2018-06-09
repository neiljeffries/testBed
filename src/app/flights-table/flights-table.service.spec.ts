import { TestBed, inject } from '@angular/core/testing';

import { FlightsService } from './flights-table.service';

describe('DataTableDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightsService]
    });
  });

  it('should be created', inject([FlightsService], (service: FlightsService) => {
    expect(service).toBeTruthy();
  }));
});
