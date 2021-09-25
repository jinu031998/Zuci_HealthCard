import { Injectable } from "@angular/core";

@Injectable()
export class StorageService{

    getValue(key : string) : string
    {
        return sessionStorage.getItem(key);
    }
    setValue(key : string, value : string) : boolean
    {
        try
        {
            sessionStorage.setItem(key, value);
            return true;
        }
        catch(err)
        {
            return false;
        }
        
    }
    clearAll() : boolean{
        sessionStorage.clear();
        return true;
    }
    removeIten(key : string) : boolean{
        sessionStorage.removeItem(key);
        return true;
    }
}