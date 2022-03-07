import { TestBed } from '@angular/core/testing';

import { SuthGuard } from './suth.guard';

describe('SuthGuard', () => {
  let guard: SuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
