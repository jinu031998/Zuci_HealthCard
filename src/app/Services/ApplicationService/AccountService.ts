import { LoginDetails } from "src/app/Models/Account/LoginDetails";
import { ApiConstants } from "src/assets/Constants/ApiConstants";
import { HttpService } from "../SharedService/HttpService";

export class AccountService {

   constructor(private httpService : HttpService){}
 
   login(loginDetails : LoginDetails){
    this.httpService.Post(ApiConstants.Url.Login, loginDetails);
   }
    
}