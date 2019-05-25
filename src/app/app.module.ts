import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Http
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Users
import { UserModule } from './users/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
