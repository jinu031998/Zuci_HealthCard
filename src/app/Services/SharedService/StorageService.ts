

export class StorageService{

    static getValue(key : string) : string
    {
        return sessionStorage.getItem(key);
    }
    static setValue(key : string, value : string) : boolean
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
}