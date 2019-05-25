import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Http
import { HttpClientModule } from '@angular/common/http';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Core Module
import { CoreModule } from './core/core.module';
// Users
import { UserModule } from './users/user.module';
// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    UserModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
