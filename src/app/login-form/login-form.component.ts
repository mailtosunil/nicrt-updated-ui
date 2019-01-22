import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  userLogin(): void {
    console.log("user: " + this.username);
    if(this.loginService.validateUser(this.username, this.password)){
      this.router.navigate(['/welcome']);
    }
    console.log("User Successfully logged in...........");

  }
}
