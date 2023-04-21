import { TestBed } from '@angular/core/testing';

import { PlainLoggerService } from './plain-logger.service';

describe('PlainLoggerService', () => {
  let service: PlainLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlainLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
