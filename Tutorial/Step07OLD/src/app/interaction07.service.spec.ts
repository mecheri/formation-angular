import { TestBed, inject } from '@angular/core/testing';

import { Interaction07Service } from './interaction07.service';

describe('Interaction07Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Interaction07Service]
    });
  });

  it('should be created', inject([Interaction07Service], (service: Interaction07Service) => {
    expect(service).toBeTruthy();
  }));
});
