import { TestBed } from '@angular/core/testing';

import { IdbAcountService } from './idb-acount.service';

describe('IdbAcountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IdbAcountService = TestBed.get(IdbAcountService);
    expect(service).toBeTruthy();
  });
});
