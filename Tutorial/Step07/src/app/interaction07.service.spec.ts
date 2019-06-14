import { TestBed } from '@angular/core/testing';

import { Interaction07Service } from './interaction07.service';

describe('Interaction07Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Interaction07Service = TestBed.get(Interaction07Service);
    expect(service).toBeTruthy();
  });
});
