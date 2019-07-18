import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookStartComponent } from './book-start/book-start.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthGuard } from '../auth/auth-guard.service';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookListComponent } from './book-list/book-list.component';

const booksRoutes: Routes = [
    {path: 'books', component: BooksComponent, children:[
        {path: '', component: BookStartComponent},
        {path: ':id/edit', component: AuthorEditComponent, canActivate:[AuthGuard]},
        {path: ':id', component: BookListComponent},
        {path: ':id/:id/edit', component: BookEditComponent, canActivate:[AuthGuard]},
      ]},

];

@NgModule({
    imports:[
        RouterModule.forChild(booksRoutes)
    ],
    exports: [RouterModule]
})
export class BooksRoutingModule{

}
