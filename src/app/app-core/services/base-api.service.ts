import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

@Injectable({ providedIn: 'root' })
export class BaseApiService {
    baseUrl = environment.baseApiUrl;
    headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    constructor(protected http: HttpClient) { }

    protected makeRequest<T>(method: Methods, endpoint: any, params: any, responseType?: 'json', headers?: HttpHeaders): Observable<T> {
        const url = `${this.baseUrl}${endpoint}`;

        const options = {
            body: params,
            headers: headers || this.headers,
            responseType
        };

        return this.http.request<T>(method, url, options);
    }

    protected file(url:string): Observable<Blob>{
        return this.http.get(url, {responseType:'blob'});
    }
}


