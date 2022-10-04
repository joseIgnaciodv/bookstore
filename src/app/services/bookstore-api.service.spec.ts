import { TestBed } from '@angular/core/testing';

import { BookstoreApiService } from './bookstore-api.service';

describe('BookstoreApiService', () => {
  let service: BookstoreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookstoreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
