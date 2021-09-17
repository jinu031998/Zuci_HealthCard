import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppLoginComponent } from './Components/app.login/app.login.component';
import { AppLayoutComponent } from './Components/app.layout/app.layout.component';
import { AppDashboardComponent } from './Components/app.dashboard/app.dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppDashboardComponent,
    AppLayoutComponent,
    AppLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
