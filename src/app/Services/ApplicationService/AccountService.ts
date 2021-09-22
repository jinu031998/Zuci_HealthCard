import { Injectable } from "@angular/core";
import { AbstractControl} from "@angular/forms";
import { Observable, of } from "rxjs";
import { LoginDetails } from "src/app/Models/Account/OnBoard";
import { ApiConstants } from "src/assets/Constants/ApiConstants";
import { HttpService } from "../SharedService/HttpService";

@Injectable()
export class AccountService {

   constructor(private httpService : HttpService){console.log("Inside AccountService Constructor");}
 
   login(loginDetails : LoginDetails){
    //this.httpService.Post(ApiConstants.Url.Login, loginDetails);
    return true;
   }
 
}