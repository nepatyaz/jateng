import { TestBed } from '@angular/core/testing';

import { KtrluserService } from './ktrluser.service';

describe('KtrluserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KtrluserService = TestBed.get(KtrluserService);
    expect(service).toBeTruthy();
  });
});
