import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from '../services/book.service';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-rent',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  books: Book[] = [];


  constructor(private bookService: BookService) { }

  async ngOnInit() {
    this.books = await this.bookService.loadBooks();
  }

  todate=formatDate(new Date(), 'yyyy.MM.dd', 'en');


}
