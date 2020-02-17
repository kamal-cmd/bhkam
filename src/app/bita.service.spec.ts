import { TestBed } from '@angular/core/testing';

import { BitaService } from './bita.service';

describe('BitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitaService = TestBed.get(BitaService);
    expect(service).toBeTruthy();
  });
});
