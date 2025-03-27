import { createReducer, on } from '@ngrx/store';
import * as BooksActions from '@books/store/books.actions';

export interface LibraryResponse {
  key: string;
  name: string;
  subject_type: string;
  work_count: number;
  works: Work[];
}

export interface Work {
  title?: string;
  author?: string;
  first_publish_year?: number;
}

export interface BooksState {
  books: Work[];
  loading: boolean;
  error: string | null;
}

export const initialState: BooksState = {
  books: [],
  loading: false,
  error: null,
};

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.loadBooks, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(BooksActions.loadBooksSuccess, (state, { books }) => ({
    ...state,
    books: Array.isArray(books) ? books : [],
    loading: false,
    error: null,
  })),
  on(BooksActions.loadBooksFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
