import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { map, catchError } from 'rxjs/operators';

const routes = {
  order: `/orders`
};

@Injectable()
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getOrders(token:any): Observable<Object[]> {
    return this.httpClient
      .cache()
      .get(routes.order, {
        headers: {
          'x-access-token': token
        }
      })
      .pipe(
        map((body: any) => body.orders),
        catchError(() => of('Error, could not load company data :-('))
      );
  }

}
