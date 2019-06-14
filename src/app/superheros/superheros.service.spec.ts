import { TestBed } from '@angular/core/testing';

import { SuperherosService } from './superheros.service';

describe('SuperherosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuperherosService = TestBed.get(SuperherosService);
    expect(service).toBeTruthy();
  });
});
