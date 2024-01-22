import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  appConfig = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    })
  };

  private catchError(error: HttpErrorResponse | any) {
    return throwError(() => error || 'Server Error ...');
  }

  private extractData(resp: HttpResponse<any>) {
    return resp;
  }

  getData(endpoint: string, headers: HttpHeaders = this.appConfig.headers): Observable<any> {
    return this.http.get(`${endpoint}`, { headers: headers })
      .pipe(
        catchError(err => {
          return this.catchError(err);
        }),
        map(
          (response: any) => {
            return this.extractData(response);
          }
        )
      );
  }

  getPdf(endpoint: string, headers: HttpHeaders = this.appConfig.headers): Observable<any> {
    return this.http.get(`${endpoint}`, { headers: headers, responseType: 'blob' as 'json' })
      .pipe(
        catchError(err => {
          return this.catchError(err);
        }),
        map(
          (response: any) => {
            return this.extractData(response);
          }
        )
      );
  }

  postData(endPoint: string, data: any, headers: HttpHeaders = this.appConfig.headers): Observable<any> {
    return this.http.post(`${endPoint}`, data, { headers: headers });
  }

  postDataWithStringResponse(endPoint: string, headers: HttpHeaders = this.appConfig.headers): Observable<any> {
    return this.http.post<string>(`${endPoint}`, null, {
      headers: new HttpHeaders({
        'Accept': 'text/plain',
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
      }), responseType: 'text' as 'json'
    });
  }

  uploadFile(endPoint: string, data: any): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('file', data, data.name);

    return this.http.post(`${endPoint}`, formData, {
      headers: new HttpHeaders({
        'Accept': '*/*',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*'
      })
    });
  }

  putData(endPoint: string, data: any, headers: HttpHeaders = this.appConfig.headers): Observable<any> {
    return this.http.put(`${endPoint}`, data, { headers: headers })
  }

  deleteData(endPoint: string, headers: HttpHeaders = this.appConfig.headers): Observable<any> {
    return this.http.delete(`${endPoint}`, { headers: headers });
  }

  getCsv(endpoint: string, headers: HttpHeaders = this.appConfig.headers): Observable<any> {
    return this.http.get(`${endpoint}`, { headers: headers, observe: 'response', responseType: 'text' as 'json' })
      .pipe(
        catchError(err => {
          return this.catchError(err);
        }),
        map(
          (response: any) => {
            return this.extractData(response);
          }
        )
      );
  }

  downloadFile(endpoint: string, headers: HttpHeaders = this.appConfig.headers): Observable<any> {
    return this.http.get(`${endpoint}`, { headers: headers, observe: 'response', responseType: 'arraybuffer' })
      .pipe(
        catchError(err => {
          return this.catchError(err);
        }),
        map(
          (response: any) => {
            return this.extractData(response);
          }
        )
      );
  }
}
