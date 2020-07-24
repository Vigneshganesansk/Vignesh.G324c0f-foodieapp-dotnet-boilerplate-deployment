import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private alertify: AlertifyService
    ) { }
  model: any = {}
  isLoggedIn: boolean;
  ngOnInit() {
    this.auth.loginStatus$.subscribe(response => {
      this.isLoggedIn = response;
    })
  }
  login(){
    this.auth.login(this.model).subscribe(next => {
      this.alertify.success("Login success");
    }, error => {
      this.alertify.error("Login failed");
    });
  }

  loggedIn(){
    const token = sessionStorage.getItem('token');
    return !!token;
  }
  logout(){
    this.auth.logout();
  }
}
