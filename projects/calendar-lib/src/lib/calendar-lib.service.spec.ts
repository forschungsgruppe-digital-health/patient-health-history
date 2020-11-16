import { TestBed } from '@angular/core/testing';

import { CalendarLibService } from './calendar-lib.service';

describe('CalendarLibService', () => {
  let service: CalendarLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
