import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { LoginDetails } from 'src/app/Models/Account/LoginDetails';
import { AccountService } from 'src/app/Services/ApplicationService/AccountService';

@Component({
  selector: 'hc-app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppLoginComponent implements OnInit {
  constructor(private accountService : AccountService){}

  UserEmail: string = "";
  Password: string = "";
  showLoginForm: boolean = true;
  showSignupForm: boolean = false;
  private formToggleSubject = new BehaviorSubject<string>("login");
  private formToggle$ = this.formToggleSubject.asObservable();
  loginForm : FormGroup;

  ngOnInit(): void {
    this.toggleForm();
    this.createloginForm();
  }
  login(){
    console.log(this.loginForm.value);
    let loginDetails: LoginDetails = {
      Email: this.loginForm.get('Email').value,
      Password: this.loginForm.get('Password').value
  };
    this.accountService.login(loginDetails);
  }
  createloginForm(){
    this.loginForm = new FormGroup({
      Email: new FormControl('',[
        Validators.required
      ]),
      Password: new FormControl('',[
        Validators.required,
        Validators.minLength(5),
      ]),
      RememberMe: new FormControl(false),
    });
  }

  toggleForm() {
    this.formToggle$.subscribe(button => {
      if (button == "login") {
        this.showLoginForm = true;
        this.showSignupForm = false;
      }
      else {
        this.showLoginForm = false;
        this.showSignupForm = true;
      }
    })
  }

  ChangeForm(formName: string) {
    this.formToggleSubject.next(formName);
  }
  //this.router.navigate(['login']);
}