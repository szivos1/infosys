import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];

  searchQuery: string;

  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.books = await this.bookService.loadBooks();
  }

  async search() {
    this.books = await this.bookService.filterBooks(this.searchQuery);
  }

}
