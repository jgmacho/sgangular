import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SiteDetailComponent } from './company-info/site-detail/site-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteDetailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
