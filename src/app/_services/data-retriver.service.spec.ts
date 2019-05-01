/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataRetriverService } from './data-retriver.service';

describe('Service: DataRetriver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataRetriverService]
    });
  });

  it('should ...', inject([DataRetriverService], (service: DataRetriverService) => {
    expect(service).toBeTruthy();
  }));
});
