import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book, BookService } from '../../services/book.service';
import { selectIsAuthenticated, selectUsername } from '../../../auth/store/auth.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent {
  username$;
  isAuthenticated$;
  books$: Observable<Book[]> | undefined;
  isLoading$ = new BehaviorSubject<boolean>(true);
  error: string | undefined;
  
  constructor(private store: Store, private bookService: BookService) {
    this.username$ =  this.store.select(selectUsername);
    this.isAuthenticated$ = this.store.select(selectIsAuthenticated);
  }

  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
    this.books$.subscribe(
      (books) => {
        this.isLoading$.next(false);
        console.log('Libros obtenidos:', books);
      },
      (error) => {
        this.isLoading$.next(false);
        this.error = 'Error al obtener los libros';
        console.error('Error:', error);
      }
    );
  }
}
