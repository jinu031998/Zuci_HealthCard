import { Component, OnInit } from '@angular/core';

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

 } 