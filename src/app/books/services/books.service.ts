import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LibraryResponse } from '../store/books.reducer';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'https://openlibrary.org/subjects/programming.json?limit=15';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<LibraryResponse> {
    return this.http.get<LibraryResponse>(this.apiUrl).pipe(
      catchError(() => {
        return throwError(() => new Error('Error al obtener libros'));
      })
    );
  }
  
}
