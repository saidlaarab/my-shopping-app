import { Injectable } from '@angular/core';
import { PRODUCTS } from '../assets/products';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _allProducts: Product[] = [];
  _itemsCount: number = 0;
  _totalPrice: number = 0;

  constructor(){
    this._allProducts = PRODUCTS;
  }

  productsByCategory( category: string ): Product[]{
    if(category === "All Categories") return this.allProducts();
    return this.allProducts().filter(product => product.category === category);
  }
  
  allProducts(): Product[]{
    return this._allProducts;
  }

  updateItemsCount(count: number): void{
    this._itemsCount += count;

  }

  updateProductQty(id:number, qty: number): void {
    const product = this.selectedProducts().find(product => product.id === id);
    if(product) product.orderedQty = qty;                        
  }

  getItemsCount(): number{
    return this._itemsCount;
  }

  selectedProducts(){
    const products = this.allProducts().filter( product => product.orderedQty > 0 );
    return products;
  }

  totalPrice(){
    this._totalPrice = 0;
    this.selectedProducts().forEach(product => this._totalPrice += product.price * product.orderedQty);
    return this._totalPrice; 
  }

  clearCart(){
    this.selectedProducts().forEach(product => product.orderedQty = 0);
    this._totalPrice = 0;
    this._itemsCount = 0;
  }
}
