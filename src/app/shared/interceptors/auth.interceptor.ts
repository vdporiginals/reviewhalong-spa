import { isPlatformBrowser } from '@angular/common';
import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LocalStorageService } from '../services/localstorage.service';

@Injectable()
export class ApiAuthInterceptor implements HttpInterceptor {
    constructor(@Inject(PLATFORM_ID) private platformId: Object, private localStorage: LocalStorageService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (isPlatformBrowser(this.platformId)) {
            const authUserToken = this.localStorage.getItem('access_token');
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + authUserToken
                }
            });
            return next.handle(req).pipe(tap(() => { },
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status !== 401) {
                            return;
                        }
                        console.log(err);
                    }
                }));
        }
    }
}
