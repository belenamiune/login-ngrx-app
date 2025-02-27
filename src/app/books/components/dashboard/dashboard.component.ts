import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectUsername } from '../../../auth/store/auth.selectors';
import { selectBooks, selectBooksLoading, selectBooksError } from '../../store/books.selectors';
import { loadBooks } from '../../store/books.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class DashboardComponent implements OnInit{
  username$;
  books$;
  isLoading$;
  error$;
  
  constructor(private store: Store) {
    this.username$ =  this.store.select(selectUsername);
    this.books$ = this.store.select(selectBooks);
    this.isLoading$ = this.store.select(selectBooksLoading);
    this.error$ = this.store.select(selectBooksError);
  }

  ngOnInit(): void {
    this.store.dispatch(loadBooks());
  }

}
