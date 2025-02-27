import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { BooksService } from '../services/books.service';
import { loadBooks, loadBooksFailure, loadBooksSuccess } from './books.actions';

@Injectable()
export class BooksEffects {
  
  constructor(private actions$: Actions, private booksService: BooksService) {}
  
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadBooks),
      mergeMap(() =>
        this.booksService.getBooks().pipe(
          map(response => loadBooksSuccess({ books: response.works})), 
          catchError(() => {
            return of(loadBooksFailure({ error: 'Error al cargar libros' }));
          })
        )
      )
    )
  );
  
}
