import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { AuthInterceptorService } from './services/auth-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule, HttpClientModule, BrowserAnimationsModule
  ],
  providers: [
    AuthInterceptorService,{
      provide:HTTP_INTERCEPTORS,
      useFactory:function(injector:Injector){
        return new AuthInterceptorService(injector);
      },
      multi:true,
      deps:[Router]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
