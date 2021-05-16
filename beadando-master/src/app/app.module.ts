import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book-list/book/book.component';
import { RentFormComponent } from './rent/rent-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookFormComponent } from './book-form/book-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { RentItemComponent } from './rent/cart-item/rent-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    RentFormComponent,
    RentItemComponent,
    BookFormComponent,
    UserFormComponent,
    CategoryFormComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
