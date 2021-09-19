import { Injectable, Injector } from "@angular/core";
import { Observable } from "rxjs";
import { LoginDetails } from "../Models/Account/OnBoard";
import { AccountService } from "./ApplicationService/AccountService";

@Injectable({
  providedIn: 'root'
})
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
    return this.accountService.login(loginDetails);
  }
  isEmailExists(Email : string) : Observable<boolean>{
    return this.accountService.isEmailExists(Email);
 }
}