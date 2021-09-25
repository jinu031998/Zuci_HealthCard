import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpService {
    public httpOptions: {
        headers: HttpHeaders
    };
    constructor(private http: HttpClient) { }
    
    Get<T>(url : string , httpOptions? : any)  : Observable<T>{   
       return this.http.get<T>(url , this.GetHttpOptions(httpOptions));
    }

    Post(url :string, data : any, httpOptions? : any){
        return this.http.post(url, data, this.GetHttpOptions(httpOptions));
    }


    GetHttpOptions(httpOptions : object){
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