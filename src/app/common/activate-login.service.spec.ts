import { TestBed } from '@angular/core/testing';

import { ActivateLoginService } from './activate-login.service';

describe('ActivateLoginService', () => {
  let service: ActivateLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivateLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
