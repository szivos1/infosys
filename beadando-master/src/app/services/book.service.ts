import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  async loadBooks() {
    return this.http.get<Book[]>('/api/books').toPromise();
  }

  async filterBooks(search: string) {
    return this.http.get<Book[]>('/api/books', {
      params: { search }
    }).toPromise();
  }

  async addBook(book: Book) {
    return this.http.post<Book>('/api/books', book).toPromise();
  }

  async getBookById(id: string) {
    return this.http.get<Book>('/api/books/' + id).toPromise();
  }
}
