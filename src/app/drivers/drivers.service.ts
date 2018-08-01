import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { map, catchError } from 'rxjs/operators';

const routes = {
  // quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
  drivers: `/drivers`
};

// export interface RandomQuoteContext {
//   // The quote's category: 'dev', 'explicit'...
//   category: string;
// }

@Injectable()
export class DriversService {

  constructor(private httpClient: HttpClient) { }

  getDrivers(token:any): Observable<Object[]> {
    return this.httpClient
      .cache()
      .get(routes.drivers, {
        headers: {
          'x-access-token': token
        }
      })
      .pipe(
        map((body: any) => body.users),
        catchError(() => of('Error, could not load company data :-('))
      );
  }

}
