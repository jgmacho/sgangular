import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SiteDetailComponent } from './component/site-detail/site-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { ProductCardComponent } from './component/product-card/product-card.component';



@NgModule({
  declarations: [
    AppComponent,
    SiteDetailComponent,
    NavBarComponent,
    HomeComponent,
    ShopComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
