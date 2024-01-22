/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StringFunctionsService } from './string-functions.service';

describe('Service: StringFunctions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringFunctionsService]
    });
  });

  it('should ...', inject([StringFunctionsService], (service: StringFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
