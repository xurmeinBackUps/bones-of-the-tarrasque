import { TestBed } from '@angular/core/testing';

import { DiePlacerService } from './die-placer.service';

describe('DiePlacerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiePlacerService = TestBed.get(DiePlacerService);
    expect(service).toBeTruthy();
  });
});
