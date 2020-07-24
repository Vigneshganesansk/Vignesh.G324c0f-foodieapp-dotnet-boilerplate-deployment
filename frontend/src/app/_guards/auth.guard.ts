import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertify: AlertifyService
    ){
  }
  loginStatus: boolean;
  canActivate():boolean {
    this.authService.loginStatus$.subscribe(status => {
      this.loginStatus = status;
    });
    if(!this.loginStatus)
    {
      this.alertify.error("Please login");
      this.router.navigate['/'];
    }
    return this.loginStatus;
    
  }
}
