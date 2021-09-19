import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { LoginDetails } from "src/app/Models/Account/OnBoard";
import { ApiConstants } from "src/assets/Constants/ApiConstants";
import { HttpService } from "../SharedService/HttpService";

@Injectable({
   providedIn: 'root'
 })
export class AccountService {

   constructor(private httpService : HttpService){console.log("Inside AccountService Constructor");}
 
   login(loginDetails : LoginDetails){
      console.log("Api Hit");
    this.httpService.Post(ApiConstants.Url.Login, loginDetails);
   }
   isEmailExists(Email : string) : Observable<boolean>{
      console.log("Inside Validator..."+Email);
      this.httpService.Get(ApiConstants.Url.Login);
      if(Email == 'sam1@gmail.com') return of(true);
      else of(false);
   }
    
}