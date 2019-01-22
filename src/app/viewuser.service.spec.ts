import { TestBed } from '@angular/core/testing';

import { ViewuserService } from './viewuser.service';

describe('ViewuserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewuserService = TestBed.get(ViewuserService);
    expect(service).toBeTruthy();
  });
});
