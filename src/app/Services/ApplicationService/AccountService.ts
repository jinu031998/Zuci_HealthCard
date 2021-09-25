import { Injectable } from "@angular/core";import { LoginDetails } from "src/app/Models/OnBoard";
import { HttpService } from "../SharedService/HttpService";
import { StorageService } from "../SharedService/StorageService";

@Injectable()
export class AccountService {

   constructor(private httpService: HttpService,
      private storageService: StorageService) {
      console.log("Inside AccountService Constructor");
   }
   
   get isLoggedIn() : boolean{
      var token = this.storageService.getValue("token");
      return typeof(token) !== 'undefined' && token !== null && token !== '';
   }

   login(loginDetails: LoginDetails) {
      //this.httpService.Post(ApiConstants.Url.Login, loginDetails);
      this.storageService.setValue("token", "testtoken021")
      return true;
   }
   logout() {
      this.storageService.clearAll();
   }

}