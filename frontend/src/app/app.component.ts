import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(
    private auth: AuthService,
    private router: Router
    ){

  }
  ngOnInit(){
    this.auth.loginStatus$.subscribe(response => {
      if(response){
        this.router.navigate(['/']);
      }
      else{
        this.router.navigate(['/register']);
      }
    })
  }
}
