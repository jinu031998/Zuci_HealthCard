import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppOnboardComponent } from './Components/app.onboard/app.onboard.component';
import { AppDashboardComponent } from './Components/app.dashboard/app.dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './Services/ApplicationService/AccountService';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpService } from './Services/SharedService/HttpService';
import { FacadeService } from './Services/FacadeService';
import { RouterModule } from '@angular/router';
import { AppTreatmentComponent } from './Components/app.treatment/app.treatment.component';
import { AppHeaderComponent } from './Components/app.header/app.header.component';
import { AppFooterComponent } from './Components/app.footer/app.footer.component';
import { AuthGuard } from './Services/ApplicationService/AuthGuard';
import { StorageService } from './Services/SharedService/StorageService';
import { UserService } from './Services/ApplicationService/UserService';

@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent,
    AppOnboardComponent,
    AppTreatmentComponent,
    AppHeaderComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: AppDashboardComponent, canActivate: [AuthGuard]},
      { path: 'onboard', component: AppOnboardComponent },
      { path: 'treatment', component: AppTreatmentComponent },
      //{ path: '', redirectTo: 'onboard', pathMatch: 'full' },
      // {
      //   path: 'products',
      //   canActivate: [AuthGuard],
      //   data: { preload: false },
      //   loadChildren: () =>
      //     import('./products/product.module').then(m => m.ProductModule)
      // },
      //{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
      
    ])
  ],
  providers: [
    FacadeService,
    HttpService,
    AccountService,
    StorageService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
