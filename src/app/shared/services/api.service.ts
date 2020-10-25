import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export abstract class BaseApiService<T>{
    public httpOptions;

    constructor(protected http: HttpClient, protected actionUrl: string) { }

    getList(params?): Observable<T[]> {
        return this.http.get(`${this.actionUrl}/`, {
            params
        }).pipe(map((res: any) => res.Payload));
    }

    getDetail(id: number, params?): Observable<HttpEvent<T>> {
        return this.http.get<T>(`${this.actionUrl}/${id}`, {
            params
        }).pipe(map((res: any) => res.Payload));
    }

    create(data: T, params?): Observable<HttpEvent<T>> {
        this.httpOptions = {
            params
        };
        return this.http.post<T>(`${this.actionUrl}`, data, this.httpOptions);
    }

    update(data: T, id: number, params?): Observable<HttpEvent<T>> {
        this.httpOptions = {
            params
        };
        return this.http.put<T>(`${this.actionUrl}/${id}`, data, this.httpOptions);
    }

    delete(id: number, params?): Observable<HttpEvent<T>> {
        this.httpOptions = {
            params
        };
        return this.http.delete<T>(`${this.actionUrl}/${id}`, this.httpOptions);
    }
}
