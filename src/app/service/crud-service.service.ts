import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Iidentification, ICrud, localStorageKey } from '../shared';
import { catchError, map, Observable, throwError, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CrudServiceService<T extends Iidentification> implements ICrud<T> {
  BASE_URL = 'http://localhost:8080/';
  httpOptions = {
    observe: 'response' as 'response',
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(
    @Inject('chaveLocalStorage') chaveLocalStorage: localStorageKey,
    private httpClient: HttpClient
  ) {
    this.BASE_URL += chaveLocalStorage;
  }

  inserir(object: T): Observable<T | null> {
    return this.httpClient
      .post<T>(this.BASE_URL, JSON.stringify(object), this.httpOptions)
      .pipe(
        map((resp: HttpResponse<T>) => {
          if (resp.status != 201) {
            return null;
          } else {
            return resp.body!;
          }
        }),
        catchError((e) => {
          return throwError(() => e);
        })
      );
  }

  buscarPorId(id: number | string): Observable<T | null> {
    return this.httpClient
      .get<T>(this.BASE_URL + '/' + id, this.httpOptions)
      .pipe(
        map((resp: HttpResponse<T>) => {
          if (resp.status != 200) {
            return null;
          } else {
            return resp.body!;
          }
        }),
        catchError((e) => {
          if (e.status == 404) {
            return of(null);
          } else {
            return throwError(() => e);
          }
        })
      );
  }

  atualizar(object: T): Observable<T | null> {
    return this.httpClient
      .put<T>(
        this.BASE_URL + '/' + object.id,
        JSON.stringify(object),
        this.httpOptions
      )
      .pipe(
        map((resp: HttpResponse<T>) => {
          if (resp.status != 200) {
            return null;
          } else {
            return resp.body!;
          }
        }),
        catchError((e) => {
          return throwError(() => e);
        })
      );
  }

  remover(id: number | string): Observable<T | null> {
    return this.httpClient
      .delete<T>(this.BASE_URL + '/' + id, this.httpOptions)
      .pipe(
        map((resp: HttpResponse<T>) => {
          if (resp.status != 200) {
            return null;
          } else {
            return resp.body!;
          }
        }),
        catchError((e) => {
          return throwError(() => e);
        })
      );
  }

  listarTodos(filter?: string): Observable<T[] | null> {
    let queryParameter = '';
    if (filter) {
      queryParameter = `?nome=${filter}`;
    }
    return this.httpClient
      .get<T[]>(`${this.BASE_URL}${queryParameter}`, this.httpOptions)
      .pipe(
        map((resp: HttpResponse<T[]>) => {
          if (resp.status != 200) {
            return [];
          } else {
            return resp.body!;
          }
        }),
        catchError((e) => {
          if (e.status == 404) {
            return of([]);
          } else {
            return throwError(() => e);
          }
        })
      );
  }
}
