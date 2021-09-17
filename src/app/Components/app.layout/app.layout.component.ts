import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'hc-app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.css']
})
export class AppLayoutComponent implements OnInit{

  UserEmail : string = "";
  Password : string = "";

  ngOnInit(): void { 
  }

  login(loginForm :NgForm){
    console.log("LoginForm.."+loginForm.form);
    console.log("LoginFormValue.."+JSON.stringify(loginForm.value));
  }
  //this.router.navigate(['login']);
 } 