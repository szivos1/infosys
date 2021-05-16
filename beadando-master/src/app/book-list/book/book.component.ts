import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  book!: Book;
  late:boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
     
    let today=new Date();
    let newdate=new Date(this.book.date);
    if (newdate>today) {
      this.late=true;
    }
    console.log(this.late);

  }

  navigateToBookForm(id) {
    this.router.navigate([ '/book-form' ], {
      queryParams: {
        id: id
      }
    });
  }

}
