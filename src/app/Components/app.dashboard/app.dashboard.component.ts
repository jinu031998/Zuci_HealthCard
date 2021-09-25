import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/OnBoard';
import { UserService } from 'src/app/Services/ApplicationService/UserService';

@Component({
  selector: 'hc-app-dashboard',
  templateUrl: './app.dashboard.component.html',
  styleUrls: ['./app.dashboard.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class AppDashboardComponent implements OnInit{

  constructor(private userService : UserService){}

  allUsers$ : Observable<User[]>

  ngOnInit(): void {
   
    this.allUsers$ = this.userService.allUsers$;
  }

  
  //this.router.navigate(['login']);
 } 