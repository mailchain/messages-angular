import { TestBed } from '@angular/core/testing';

import { MessagesAngularService } from './messages-angular.service';

describe('MessagesAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesAngularService = TestBed.get(MessagesAngularService);
    expect(service).toBeTruthy();
  });
});
