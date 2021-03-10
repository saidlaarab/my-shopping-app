import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shelves',
  templateUrl: './shelves.component.html',
  styleUrls: ['./shelves.component.css']
})
export class ShelvesComponent implements OnInit, OnChanges{
  allProducts: Product[] = [];
  @Input() category:string = "All Categories";
  products:Product[] = []; // products by category

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.allProducts = this.productService.allProducts();
    this.products = this.allProducts;
  }

  ngOnChanges(){
    this.products = this.productService.productsByCategory(this.category);
  } 
}