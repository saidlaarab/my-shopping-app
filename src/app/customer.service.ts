import { Injectable } from '@angular/core';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  _customer: Customer = {name:'', address:'', city: ''};

  constructor() { }

  set customer(customer: Customer){
    this._customer = customer;
  }

  get customer(){
    return this._customer;
  }
}
