import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BooksComponent } from './books.component';
import { BookStartComponent } from './book-start/book-start.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorItemComponent } from './author-list/author-item/author-item.component';
import { BookDetailComponent } from './book-list/book-item/book-detail/book-detail.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
declarations:[
BooksComponent,
BookStartComponent,
AuthorListComponent,
AuthorEditComponent,
AuthorItemComponent,
BookDetailComponent,
BookEditComponent,
BookListComponent,
BookItemComponent
],
imports:[
CommonModule,
ReactiveFormsModule,
BooksRoutingModule,
SharedModule,
FormsModule
]
})
export class BooksModule{

}
