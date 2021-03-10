import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  itemsCount: number = 0;
  selectedProducts: Product[] = [];
  totalPrice: number = 0;

  constructor(private productService: ProductService,
              private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private router: Router) { }

  ngOnInit(): void {
    this.itemsCount = this.productService.getItemsCount();
    this.selectedProducts = this.productService.selectedProducts();
    this.totalPrice = this.productService.totalPrice();
  }

  // Checkout form set up:
  checkoutForm = this.formBuilder.group({
    name:['', Validators.required],
    address:['', Validators.required],
    city:['', Validators.required]
  });
  
  onSubmit(): void {
    this.customerService.customer = this.checkoutForm.value;
    this.router.navigateByUrl("/receipt");
  }

}
