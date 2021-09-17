import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class HttpService {
 
    constructor(private http: HttpClient) { }

    Get(url : string , httpOptions? : any){   
       return this.http.get(url , this.GetHttpOptions(httpOptions));
    }

    Post(url :string, data : any, httpOptions? : any){
        return this.http.post(url, data, this.GetHttpOptions(httpOptions));
    }

    GetHttpOptions(httpOptions : any){
        if(httpOptions == null || httpOptions == undefined)
            return this.GetDefaultHttpOptions();
        else
            return httpOptions;
    }

    GetDefaultHttpOptions(){
        return {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              Authorization: 'my-auth-token'
            }),
          };
    }

    
    
}