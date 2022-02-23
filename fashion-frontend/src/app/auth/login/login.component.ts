import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // username: string;
  // password: string;
  constructor( ) { }

  ngOnInit(): void {
  }

  async login() {
    // if (!this.username && !this.password) {
    //   this.alertService.showWarning('Please enter Mobile no. or Email and Password');
    //   return;
    // } else if (!this.username) {
    //   this.alertService.showWarning('Please enter Mobile no. or Email');
    //   return;
    // } else if (!this.password) {
    //   this.alertService.showWarning('Please enter Password');
    //   return;
    // } else {
    //   this.authService.login(this.username, this.password);
    // }
  }
}
