import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { SiteDetailComponent } from './company-info/site-detail/site-detail.component';
import { AppRoutingModule } from './/app-routing.module';
=======
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
>>>>>>> 92a2617b1daf3cc6052f23912628c6d7a09eb94e


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SiteDetailComponent
=======
    NavBarComponent
>>>>>>> 92a2617b1daf3cc6052f23912628c6d7a09eb94e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
