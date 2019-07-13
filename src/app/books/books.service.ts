import {Book} from '../shared/book.model';
import {Author} from './author.model';
import { EventEmitter, Injectable } from '@angular/core';
import { MyListService } from '../my-list/my-list.service';
@Injectable()

export class BooksService{
authorSelected = new EventEmitter<Author>();
bookSelected = new EventEmitter<Book>();

    private authors: Author[] = [
        new Author(1,"J. K. Rowling"," born 31 July 1965",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/729px-J._K._Rowling_2010.jpg"),
        new Author(2,"Stephen King"," born 21 September 1947",
        "https://pmcvariety.files.wordpress.com/2017/08/stephen-king.jpg?w=1000")
      ];


    private books: Book[] = [
        new Book(1,"Harry Potter and the Philosopher's Stone",
        "Publication date: 26 June 1997(UK), 1 September 1998(US)", "Sumary1","https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"),
        new Book(2, "Skeleton Crew","Publication date: June 21, 1985", "Sumaryq2","https://upload.wikimedia.org/wikipedia/en/f/f3/SkeletonCrewHC.jpg"),
        new Book(2, "Blockade Billy", "Publication date: April 20, 2010",  "Sumary3","https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Blockade_Billy.jpg/200px-Blockade_Billy.jpg")
      ];
constructor(private listService:MyListService){}
      getAuthors(){
        return this.authors.slice();
      }
      getBooks(){
        return this.books.slice();
      }
      addBooksToMyList(book:Book){
this.listService.addBook(book);
      }
}
