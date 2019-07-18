import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BooksService } from '../books/books.service';
import { Author } from '../books/author.model';
import { Book } from './book.model';
import { MyListService } from '../my-list/my-list.service';
import { AuthService } from '../auth/auth.service';


@Injectable()
export class DataStorageService {

  constructor(private http: Http, private booksService:BooksService, private listService: MyListService, private authService: AuthService) {}

  storeBooks(){
  const token=this.authService.getToken()
return this.http.put('https://books-29cae.firebaseio.com/books.json?auth='+token,this.booksService.getBooks());

  }
  storeAuthors(){  const token=this.authService.getToken()
    return this.http.put('https://books-29cae.firebaseio.com/authors.json?auth='+token,this.booksService.getAuthors());
  }
storeMyList(){  const token=this.authService.getToken()
  return this.http.put('https://books-29cae.firebaseio.com/booklist.json?auth='+token,this.listService.getBooks());
}

getMyList(){
  const token=this.authService.getToken()
  this.http.get('https://books-29cae.firebaseio.com/booklist.json?auth='+token).subscribe(
      (response: Response)=>{
    const books:Book[]=response.json();
    this.listService.setBooks(books);
      }
    );
}
  getAuthors(){
   const token=this.authService.getToken()
this.http.get('https://books-29cae.firebaseio.com/authors.json?auth='+token)
.subscribe(
  (response: Response)=>{
const authors:Author[]=response.json();
this.booksService.setAuthors(authors);
  }
);
  }
  getBooks(){
    const token=this.authService.getToken()
    this.http.get('https://books-29cae.firebaseio.com/books.json?auth='+token).subscribe(
      (response: Response)=>{
    const books:Book[]=response.json();
    this.booksService.setBooks(books);
      }
    );
  }

}
