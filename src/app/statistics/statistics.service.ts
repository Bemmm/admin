import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { map, catchError } from 'rxjs/operators';

const routes = {
  // quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
  statistics: `/main-statistic`
};

// export interface RandomQuoteContext {
//   // The quote's category: 'dev', 'explicit'...
//   category: string;
// }

@Injectable()
export class StatisticsService {

  constructor(private httpClient: HttpClient) { }

  getStatistics(token: string): Observable<Object[]> {
    return this.httpClient
      .cache()
      .get(routes.statistics, {
        headers: {
          'x-access-token': token
        }
      })
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load the statistic :-('))
      );
  }

}
