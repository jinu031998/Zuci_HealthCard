import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { CustomValidation } from 'src/app/Services/SharedService/ValidationService';
import { FacadeService } from 'src/app/Services/FacadeService';
import { Router } from '@angular/router';
import { LoginDetails } from 'src/app/Models/OnBoard';

@Component({
  selector: 'hc-app-onboard',
  templateUrl: './app.onboard.component.html',
  styleUrls: ['./app.onboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppOnboardComponent implements OnInit {
  constructor(private router : Router, private facadeService : FacadeService, private formBuilder : FormBuilder){}

  testContent : string = "Zuci_HealthCard";
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
    // setInterval(()=>{
    //   this.testContent = this.testContent+"..";
    // }, 2000);
  }
  // ChangeContent(){
  //   this.testContent = this.testContent;
  // }
  
  EmailExists(control : AbstractControl) : Observable<{[key : string] : boolean}> | null{
     return of(null);
    //Not able to call the service to perform validation as there is the problem with service injection.
    //return this.facadeService.EmailExists(control.value)
  }

  login(){
    console.log(this.loginForm.value);
    let loginDetails = <LoginDetails>this.loginForm.value;
    let isValidUser = this.facadeService.login(loginDetails);
    if(isValidUser) this.redirectToDashboard();
  }

  redirectToDashboard(){
    this.router.navigate(['dashboard']);
  }
  signIn(){
    console.log(this.signinForm.value);
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
      Email: ['', { validators: [ Validators.required, Validators.email ], asyncValidators: [this.EmailExists]}],
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
      console.log(button);
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