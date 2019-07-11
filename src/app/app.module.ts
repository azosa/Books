import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyListEditComponent } from './my-list/my-list-edit/my-list-edit.component';
import { AuthorListComponent } from './books/author-list/author-list.component';
import { AuthorItemComponent } from './books/author-list/author-item/author-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    MyListComponent,
    MyListEditComponent,
    AuthorListComponent,
    AuthorItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
