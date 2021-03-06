import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ApiResponse } from "../model/api.response";

export class Customer {
  constructor(public id: number, public firstName: string, public lastName: string, public middleName: string, public email: string, public phone: string) { }
}

const CUSTOMERS: Customer[] = [
  new Customer(11, 'Satheesh', 'Chepuri', "V", "chepurusatheesh@gmail.com", "995900050"),
  new Customer(12, 'Neeraja', 'Chepuri', "G", "neeraja@gmail.com", "995900050"),
  new Customer(13, 'Geethika', 'Chepuri', "Naga", "geetu@gmail.com", "995900050"),
  new Customer(14, 'Pranitha', 'Chepuri', "Laxmi", "prani@gmail.com", "995900050"),

];

const FETCH_LATENCY = 500;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
/** Simulate a data service that retrieves heroes from a server */
@Injectable()
export class CustomersService implements OnDestroy {


  constructor(private http: HttpClient) { }
  hosturl = 'http://custom-service-lb-1070377384.us-east-1.elb.amazonaws.com/customer';
  ngOnDestroy() { console.log('CustomersService instance destroyed.'); }

  getCustomers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.hosturl}/findAll`);
  }

  getCustomer(id: number): Observable<Customer> {
    const customer$ = of(CUSTOMERS.find(customer => customer.id === +id));
    return customer$.pipe(delay(FETCH_LATENCY));
  }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }

}

