import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hc-app-layout',
  templateUrl: './app.layout.component.html',
  styleUrls: ['./app.layout.component.css']
})
export class AppLayoutComponent implements OnInit{

  constructor(private router : Router){}

  UserEmail : string = "";
  Password : string = "";

  ngOnInit(): void { 
    //this.router.navigate(['dashboard']);
  }

 } 