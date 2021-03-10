import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  selectedProducts: Product[] = [];
  totalPrice: number = 0;
  itemsCount: number = 0;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.selectedProducts = this.productService.selectedProducts();
    this.totalPrice = this.productService.totalPrice();
    this.itemsCount = this.productService.getItemsCount();
  }

  clear(): void{
    this.productService.clearCart();
    this.selectedProducts = [];
    this.totalPrice = 0;
    this.itemsCount = 0;
  }

  ngDoCheck(){
    this.itemsCount = this.productService.getItemsCount();
    this.totalPrice = this.productService.totalPrice();
    // update selectedProduct:
    this.selectedProducts = this.productService.selectedProducts();
  }
}
