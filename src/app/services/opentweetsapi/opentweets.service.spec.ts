import { TestBed } from '@angular/core/testing';

import { OpentweetsService } from './opentweets.service';

describe('OpentweetsService', () => {
  let service: OpentweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpentweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
