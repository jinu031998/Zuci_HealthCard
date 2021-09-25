import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "src/app/Models/OnBoard";
import { Users } from "src/app/Models/Users";
import { ApiConstants } from "src/assets/Constants/ApiConstants";
import { HttpService } from "../SharedService/HttpService";
import { StorageService } from "../SharedService/StorageService";
import { catchError, filter, map, mergeMap, scan, shareReplay, tap,toArray, switchMap } from 'rxjs/operators';


@Injectable()
export class UserService {

   constructor(private httpService: HttpService,
      private storageService: StorageService) {
   }
   allUsers$ = this.httpService.Get<User[]>(ApiConstants.getAllUser());
  
}