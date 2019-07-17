import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BooksService } from '../books/books.service';
import { Author } from '../books/author.model';
import { Book } from './book.model';


@Injectable()
export class DataStorageService {

  constructor(private http: Http, private booksService:BooksService) {}

  storeBooks(){
return this.http.put('https://books-29cae.firebaseio.com/books.json',this.booksService.getBooks());

  }
  storeAuthors(){
    return this.http.put('https://books-29cae.firebaseio.com/authors.json',this.booksService.getAuthors());
  }

  getAuthors(){
this.http.get('https://books-29cae.firebaseio.com/authors.json')
.subscribe(
  (response: Response)=>{
const authors:Author[]=response.json();
this.booksService.setAuthors(authors);
  }
);
  }
  getBooks(){
    this.http.get('https://books-29cae.firebaseio.com/books.json').subscribe(
      (response: Response)=>{
    const books:Book[]=response.json();
    this.booksService.setBooks(books);
      }
    );
  }

}
