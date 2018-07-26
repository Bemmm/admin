import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from "rxjs";
import { map, catchError } from 'rxjs/operators';

const routes = {
  // quote: (c: RandomQuoteContext) => `/jokes/random?category=${c.category}`,
  companies: (p?: any) => `/companies`
};

// export interface RandomQuoteContext {
//   // The quote's category: 'dev', 'explicit'...
//   category: string;
// }

@Injectable()
export class CompaniesService {

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<Object[]> {
    return of([
      {
        users: [
          {

            address: {
              type: "",
              coordinates: [],
              label: "Вінниця"
            },
            official_address: {
              type: "",
              coordinates: [],
              label: ""
            },
            physical_address: {
              type: "",
              coordinates: [],
              label: ""
            },
            cars: ['1', '2'],
            company_users: [],
            company_cars: [],
            company_id: [],
            _id: "",
            passport: '',
            name:'',
            email:'',
            birthday:'',
            role:'',
            phone:''
          }
        ],
        count: 2,
        success: true
      }
    ])
    // return this.httpClient
    //   .cache()
    //   .get(routes.companies())
    //   .pipe(
    //     map((body: any) => body.value),
    //     catchError(() => of('Error, could not load the statistic :-('))
    //   );
  }

}
