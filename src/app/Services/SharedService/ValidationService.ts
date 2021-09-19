import { AbstractControl, ValidatorFn} from "@angular/forms";
import { AccountService } from "../ApplicationService/AccountService";

export class CustomValidation{

    static PhoneNumber(control : AbstractControl) : {[key : string] : boolean} | null {
            return new RegExp("[0-9]{10}").test(control.value) ? null : {'PhoneNumber' : true};
    }
   



    // //Can be used with parameters
    // static PhoneNumber() : ValidatorFn {
    // return (control : AbstractControl): {[key:string] : boolean} | null =>{
    //     return new RegExp("[0-9 ]{10}").test(control.value) ? null : {'PhoneNumber':true};
    //     }
    // }
}