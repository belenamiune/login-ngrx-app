import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


export interface Book {
  title: string;
  author: string;
  first_publish_year: string;
}

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'https://openlibrary.org/subjects/programming.json?limit=15';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<{ works: Book[] }>(this.apiUrl).pipe(
      map((response) => response.works),
      catchError((error) => {
        console.error('Error fetching books:', error);
        throw error;
      })
    );
  }
}
