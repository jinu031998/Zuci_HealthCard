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
import { NewsletterComponent } from './Components/newsletter/newsletter.component';
import { SampleComponent } from './Components/sample.page/sample.page.component';


@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent,
    AppLayoutComponent,
    AppOnboardComponent,
    SampleComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
