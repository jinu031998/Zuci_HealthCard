import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { LoginDetails } from "src/app/Models/Account/OnBoard";
import { ApiConstants } from "src/assets/Constants/ApiConstants";
import { HttpService } from "../SharedService/HttpService";

@Injectable({
   providedIn: 'root'
 })
export class AccountService {

   constructor(private httpService : HttpService){console.log("Inside AccountService Constructor");}
 
   login(loginDetails : LoginDetails){
    this.httpService.Post(ApiConstants.Url.Login, loginDetails);
   }
   EmailExists(control : AbstractControl) : Observable<{[key : string] : boolean}> | null {
      console.log("Inside Validator..."+control.value);
      //this.httpService.Get(ApiConstants.Url.Login);
      if(control.value == 'sam1@gmail.com') return of({ "EmailExists": true } );   
      else return of(null);
   }
 
}