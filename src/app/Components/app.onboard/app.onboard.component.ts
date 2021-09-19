import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginDetails } from 'src/app/Models/Account/OnBoard';
import { AccountService } from 'src/app/Services/ApplicationService/AccountService';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { CustomValidation } from 'src/app/Services/SharedService/ValidationService';
import { map } from 'rxjs/operators';

@Component({
  selector: 'hc-app-onboard',
  templateUrl: './app.onboard.component.html',
  styleUrls: ['./app.onboard.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppOnboardComponent implements OnInit {
  constructor(private accountService : AccountService, private formBuilder : FormBuilder){}

  UserEmail: string = "";
  Password: string = "";
  showLoginForm: boolean = true;
  showSignupForm: boolean = false;
  private formToggleSubject = new BehaviorSubject<string>("login");
  private formToggle$ = this.formToggleSubject.asObservable();
  loginForm : FormGroup;
  signinForm : FormGroup;
  datePickerConfig: Partial<BsDatepickerConfig>;

  ngOnInit(): void {
    this.toggleForm();
  }

  emailExists(control: AbstractControl) {
     this.accountService.isEmailExists(control.value)
      .pipe(
        map(res => {
          console.log(res);
          if (res) 
            return of(true);
            
            return of(false);         
        })
      );
  
}

  login(){
    console.log(this.loginForm.value);
    let loginDetails = <LoginDetails>this.loginForm.value;
    this.accountService.login(loginDetails);
  }
  signIn(){
    console.log(this.signinForm.get('PhoneNumber').errors);
  }
  
  createloginForm(){

    this.loginForm = this.formBuilder.group({
      Email : ['',[Validators.required, Validators.email]],
      Password : ['',[Validators.required]],
      RememberMe : false
    })
  }
  CreateSignInForm(){

    this.signinForm = this.formBuilder.group({
      FirstName : ['',[Validators.required]],
      LastName : ['',[Validators.required]],
      DateOfBirth : ['',[Validators.required]],
      Age : [{value : '', disabled : true},[]],
      PhoneNumber : ['',[Validators.required, CustomValidation.PhoneNumber]],
      Email: ['', { validators: [ Validators.required, Validators.email ], asyncValidators: [this.emailExists]}],
      Password : ['',[Validators.required]],
      ConfirmPassword : ['',[Validators.required]],
    });

    this.initializeSignInForm();
    this.populateAge();
    
  }
  populateAge(){
    let signInForm = this.signinForm;
    signInForm.get("DateOfBirth").valueChanges.subscribe(DateOfBirth => {
      signInForm.get("Age").setValue(this.getAge(DateOfBirth));
   })
  }
  
  initializeSignInForm(){
   let currentDate = new Date();
     this.datePickerConfig = Object.assign({},
      {
        showWeekNumbers : false,
        maxDate : new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate()),
        dateInputFormat : 'DD/MM/YYYY'
      })
  }
 getAge(birthDate : Date) {
    let today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

  toggleForm() {
    this.formToggle$.subscribe(button => {
      if (button == "login") {
        this.showLoginForm = true;
        this.showSignupForm = false;
        this.createloginForm();
        // this.showLoginForm = false;
        // this.showSignupForm = true;
        // this.CreateSignInForm();
      }
      else {
        this.showLoginForm = false;
        this.showSignupForm = true;
        this.CreateSignInForm();
      }
    })
  }

  ChangeForm(formName: string) {
    this.formToggleSubject.next(formName);
  }
  //this.router.navigate(['login']);
}