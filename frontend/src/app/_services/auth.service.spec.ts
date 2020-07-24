import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StorageService } from './storage.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AuthService, StorageService ],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('Auth Service should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
