import { TestBed } from '@angular/core/testing';

import { MessagesSendAngularService } from './messages-angular.service';

describe('MessagesAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagesSendAngularService = TestBed.get(MessagesSendAngularService);
    expect(service).toBeTruthy();
  });
});
