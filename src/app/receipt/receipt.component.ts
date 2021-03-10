import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {
  customer: Customer = {name: '', address: '', city:''};
  selectedProducts: Product[] = [];
  totalPrice = 0;
  constructor(private customerService: CustomerService,
              private productService: ProductService) { }

  ngOnInit(): void {
    this.customer = this.customerService.customer;
    this.selectedProducts = this.productService.selectedProducts();
    this.totalPrice = this.productService.totalPrice();
  }

  ngOnDestroy(){
    // Clear the cart data:
    this.productService.clearCart();
  }

}
