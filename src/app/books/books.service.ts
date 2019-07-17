import {Book} from '../shared/book.model';
import {Author} from './author.model';
import { Injectable } from '@angular/core';
import { MyListService } from '../my-list/my-list.service';
import { Subject } from 'rxjs';
@Injectable()

export class BooksService{
  authorsChanged = new Subject<Author[]>();
  booksChanged = new Subject<Book[]>();

    private authors: Author[] = [
        new Author(0,"J. K. Rowling",new Date(31,6,1965),"summary",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/729px-J._K._Rowling_2010.jpg"),
        new Author(1,"Stephen King",new Date(21,9,1947),"sumary2",
        "https://pmcvariety.files.wordpress.com/2017/08/stephen-king.jpg?w=1000")
      ];


    private books: Book[] = [
        new Book(0,"Harry Potter and the Philosopher's Stone", new Date(26,6,1997),
        "Sumary1","https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"),
        new Book(1, "Skeleton Crew",new Date(21,6,1985), "Sumaryq2","https://upload.wikimedia.org/wikipedia/en/f/f3/SkeletonCrewHC.jpg"),
        new Book(1,"Blockade Billy", new Date(20,4,2010),  "Sumary3","https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Blockade_Billy.jpg/200px-Blockade_Billy.jpg")
      ];
constructor(private listService:MyListService){}

setBooks(books:Book[]){
this.books=books;
this.booksChanged.next(this.books.slice());
}
setAuthors(authors: Author[]){
this.authors=authors;
this.authorsChanged.next(this.authors.slice());
}
      getAuthors(){
        return this.authors.slice();
      }
      getAuthor(index:number){
        return this.authors[index];
      }
       getBooks(){
        return this.books.slice();
      }
       getBook(index:number){
        return this.books[index];
      }
      addBooksToMyList(book:Book){
this.listService.addBook(book);
      }


      addAuthor(author: Author){
this.authors.push(author);
 this.authorsChanged.next(this.authors.slice());

}

updateAuthor(index:number,newAuthor:Author){
this.authors[index]=newAuthor;
this.authorsChanged.next(this.authors.slice());
}

updateBook(index:number, newBook: Book){
  this.books[index]= newBook;
  this.booksChanged.next(this.books.slice());

  }
  addBook(newBook: Book) {
        this.books.push(newBook);
        this.booksChanged.next(this.books.slice());

}

deleteBook(index:number){
  this.books.splice(index,1);
  this.booksChanged.next(this.books.slice());
}
deleteAuthor(index:number){
for(let i =0;i<this.books.length;i++){
  if(this.books[i].authorId===index){
    this.books.splice(i,1);
    this.booksChanged.next(this.books.slice());
  }
}
  this.authors.splice(index,1);
  this.authorsChanged.next(this.authors.slice());
}
}
