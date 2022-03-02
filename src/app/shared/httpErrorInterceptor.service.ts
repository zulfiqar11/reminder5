import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() {}

  // todo: proper error handline method much better written.. PluralSight Deb. Kurata course may be?
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
            .pipe(
              catchError((err: HttpErrorResponse) => {
                console.log('logging interceptor error here ' + JSON.stringify(err));
                return throwError(err)
              })
            )
  }
}

// todo: code.. how do you handle non http related errors here in the interceptor?

