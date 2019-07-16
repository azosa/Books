import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MyListComponent } from './my-list/my-list.component';
import { BookStartComponent } from './books/book-start/book-start.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { AuthorEditComponent } from './books/author-edit/author-edit.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch:'full'},
  {path: 'books', component: BooksComponent, children:[
    {path: '', component: BookStartComponent},
    {path: ':id/edit', component: AuthorEditComponent},
    {path: ':id', component: BookListComponent},
    {path: ':id/:id/edit', component: BookEditComponent},
  ]},
  {path: 'new-author', component: AuthorEditComponent},
  {path: 'new-book', component: BookEditComponent},
  {path: 'to-read-list', component: MyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
