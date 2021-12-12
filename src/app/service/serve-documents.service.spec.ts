import { TestBed } from '@angular/core/testing';

import { ServeDocumentsService } from './serve-documents.service';

describe('ServeDocumentsService', () => {
  let service: ServeDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
