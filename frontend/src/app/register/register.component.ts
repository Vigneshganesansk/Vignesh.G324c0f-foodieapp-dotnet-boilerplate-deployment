import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private alertify: AlertifyService
    ) { }
  model: any = {}
  registerMode: boolean;

  ngOnInit() {
  }
  toggleRegisterMode(){
    this.registerMode = !this.registerMode;
  }
  register(){
    this.auth.register(this.model).subscribe(() => {
      this.alertify.success('Registration done')
    }, error => {
      this.alertify.error('Registration failed')
    });
  }
  cancel(){
    this.registerMode = false;
  }

}
