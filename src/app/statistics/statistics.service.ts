import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { map, catchError } from 'rxjs/operators';

const routes = {
  // quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
  statistics: (p?: any) => `/main-statistic`
};

// export interface RandomQuoteContext {
//   // The quote's category: 'dev', 'explicit'...
//   category: string;
// }

@Injectable()
export class StatisticsService {

  constructor(private httpClient: HttpClient) { }

  getStatistics(): Observable<Object[]> {
    return of([
      {
        "_id": "users",
        "count": 11
      },
      {
        "_id": "company",
        "count": 1,
      },
      {
        "_id": "customer",
        "count": 6,
      },
      {
        "_id": "driver",
        "count": 4,
      },
      {
        "_id": "cars",
        "count": 20
      },
      {
        "_id": "orders",
        "count": 20,
      }
    ])
    // return this.httpClient
    //   .cache()
    //   .get(routes.statistics())
    //   .pipe(
    //     map((body: any) => body.value),
    //     catchError(() => of('Error, could not load the statistic :-('))
    //   );
  }

}
