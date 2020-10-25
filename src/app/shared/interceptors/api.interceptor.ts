import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';

// service

@Injectable()

export class APIInterceptor implements HttpInterceptor {

    constructor(
    ) { }



    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({
            url: `${environment.API_URL}/${req.url}`,
            setHeaders: {
                'Content-Type': 'application/json'
            }
        });
        return next.handle(request);
    }

}
