import { environment } from 'src/environments/environment';

// config all the rest api url required
export class ApiConstants {
  
    private static get baseUrl(): string {
        return environment.apiBaseUrl;
    }
    public static Url = {
        Login: ApiConstants.baseUrl +"api/Users",
    }
}
