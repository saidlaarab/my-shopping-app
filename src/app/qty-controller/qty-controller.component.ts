import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-qty-controller',
  templateUrl: './qty-controller.component.html',
  styleUrls: ['./qty-controller.component.css']
})
export class QtyControllerComponent {
  @Input() quantity: number = 0;
  @Input() message: string = '';
  @Input() productId: number = -1;

  constructor(private productService: ProductService) { }

  increase(){
    this.quantity++;
    //TODO: increase orderedQty in the product object
    this.productService.updateProductQty(this.productId, this.quantity);
    this.productService.updateItemsCount(1);
  }

  decrease(){
    if(this.quantity > 0){
      this.quantity--;
      //TODO: decrease orderedQty in the product object
      this.productService.updateProductQty(this.productId, this.quantity);
      this.productService.updateItemsCount(-1);
    }  
  }

}
