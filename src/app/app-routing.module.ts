import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {path:"cart", component: CartComponent},
  {path:"", component: HomeComponent},
  {path:"shipping", component: ShippingComponent},
  {path:"receipt", component: ReceiptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
