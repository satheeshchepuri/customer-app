import { Component, OnInit } from '@angular/core';
import {Customer} from "../model/customer.model";
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent   { 
  customers: any;
  constructor(private customersService: CustomersService) {  }  
   
  ngOnInit() { 
    this.customersService.getCustomers()
    .subscribe( data => {
        this.customers = data;
    }); 
   }
    
}
  
 
