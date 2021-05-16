import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { RentFormComponent } from './rent/rent-form.component';

const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'book-form',
    component: BookFormComponent
  },
  {
    path: 'user-form',
    component: UserFormComponent
  },
  {
    path: 'category-form',
    component: CategoryFormComponent
  },
  {
    path: 'rent-form',
    component: RentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
