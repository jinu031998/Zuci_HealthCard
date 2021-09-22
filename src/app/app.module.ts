import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppOnboardComponent } from './Components/app.onboard/app.onboard.component';
import { AppLayoutComponent } from './Components/app.layout/app.layout.component';
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

@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent,
    AppLayoutComponent,
    AppOnboardComponent,
    AppTreatmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: AppLayoutComponent },
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
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
