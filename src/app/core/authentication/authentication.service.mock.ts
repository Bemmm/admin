import { Observable, of } from 'rxjs';

import { Credentials, LoginContext } from '@app/core/authentication/authentication.service';

export class MockAuthenticationService {

  credentials: Credentials | null = {
    phone: 'test',
    'x-access-token': '123'
  };

  login(context: LoginContext): Observable<Credentials> {
    return of({
      phone: context.phone,
      'x-access-token': '123456'
    });
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

}
