import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product?:Product;

  constructor(private productService: ProductService){}

  increase(){
    if(this.product != null){
      this.product.orderedQty += 1;
      this.productService.updateItemsCount(1);
    }
  }
}
