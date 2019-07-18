import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyListComponent } from './my-list/my-list.component';
import { AuthorEditComponent } from './books/author-edit/author-edit.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/books', pathMatch:'full'},
  {path: 'new-author', component: AuthorEditComponent, canActivate:[AuthGuard]},
  {path: 'new-book', component: BookEditComponent, canActivate:[AuthGuard]},
  {path: 'to-read-list', component: MyListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
