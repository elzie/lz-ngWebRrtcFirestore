import { TestBed } from '@angular/core/testing';

import { SignalServerService } from './signal-server.service';

describe('SignalServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignalServerService = TestBed.get(SignalServerService);
    expect(service).toBeTruthy();
  });
});
