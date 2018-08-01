import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { map, catchError } from 'rxjs/operators';

const routes = {
  companies: `/companies`
};

// export interface RandomQuoteContext {
//   // The quote's category: 'dev', 'explicit'...
//   category: string;
// }

@Injectable()
export class CompaniesService {

  constructor(private httpClient: HttpClient) { }

  getCompanies(token: any): Observable<Object[]> {
    return this.httpClient
      .cache()
      .get(routes.companies, {
        headers: {
          'x-access-token': token
        }
      })
      .pipe(
        map((body: any) => body.companies),
        catchError(() => of('Error, could not load company data :-('))
      );
  }

}
