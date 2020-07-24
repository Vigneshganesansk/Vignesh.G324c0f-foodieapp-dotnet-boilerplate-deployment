import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../_services/auth.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AlertifyService } from '../_services/alertify.service';
import { StorageService } from '../_services/storage.service';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [
            AuthGuard,
            AuthService,
            AlertifyService,
            StorageService
        ],
        imports: [ HttpClientTestingModule, RouterTestingModule ]
    });
  });

  it('Auth Guard should be created', inject([AuthGuard], (guard: AuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
