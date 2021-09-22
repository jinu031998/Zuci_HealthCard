import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hc-app-treatment',
  templateUrl: './app.treatment.component.html',
  styleUrls: ['./app.treatment.component.css']
})
export class AppTreatmentComponent implements OnInit{

  constructor(private router : Router){}

  UserEmail : string = "";
  Password : string = "";

  ngOnInit(): void { 
    
  }

 } 