import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { ShelvesComponent } from './shelves/shelves.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { QtyControllerComponent } from './qty-controller/qty-controller.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    ProductComponent,
    ShelvesComponent,
    CartComponent,
    HomeComponent,
    QtyControllerComponent,
    ShippingComponent,
    ReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
