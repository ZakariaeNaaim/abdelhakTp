import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  username: string = "";
  password: string = "";
  domain:string="";

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["admin-layout"]);
    }else {
      alert("Invalid credentials");
      this.clear()
    }
  }

  clear() {
    this.username = "";
    this.password = "";
    this.domain="";
  }
}
