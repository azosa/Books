import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookDetailComponent } from './books/book-list/book-item/book-detail/book-detail.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyListEditComponent } from './my-list/my-list-edit/my-list-edit.component';
import { AuthorListComponent } from './books/author-list/author-list.component';
import { AuthorItemComponent } from './books/author-list/author-item/author-item.component';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookItemComponent,
    BookDetailComponent,
    MyListComponent,
    MyListEditComponent,
    AuthorListComponent,
    AuthorItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
