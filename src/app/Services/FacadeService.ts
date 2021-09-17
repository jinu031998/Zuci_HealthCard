import { Injectable, Injector } from "@angular/core";
import { LoginDetails } from "../Models/Account/LoginDetails";
import { AccountService } from "./ApplicationService/AccountService";

@Injectable()
export class FacadeService {
  
  constructor(private injector: Injector) {  }

  private _accountService: AccountService;
  public get accountService(): AccountService {
    if(!this._accountService){
      this._accountService = this.injector.get(AccountService);
    }
    return this._accountService;
  }
  
  

  login(loginDetails : LoginDetails) {
    return this.accountService.validateLoginCredentials(loginDetails);
  }
}