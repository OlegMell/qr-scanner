import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export function globalInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  return next(req);
}
