import { TestBed } from '@angular/core/testing';

import { CompanhiaServiceService } from './companhia-service.service';

describe('CompanhiaServiceService', () => {
  let service: CompanhiaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanhiaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
