import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input() activeCategory:string = "All Categories";
  allProducts: Product[]=[];
  itemsCount:number = 0;

  constructor(private productService: ProductService, private cd: ChangeDetectorRef){}

  ngOnInit(){
    this.allProducts = this.productService.allProducts();
  }

  updateItemsCount(){
    this.itemsCount = this.productService.getItemsCount(); 
    return this.itemsCount;
  }
  
}
