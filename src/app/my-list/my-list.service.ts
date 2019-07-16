import { Book } from '../shared/book.model'

import { Subject } from 'rxjs';

export class MyListService{
booksChanged = new Subject<Book[]>();

    private books: Book[]=[
        new Book(3,'alicja','nice story','data', 'https://www.nic.pl'),
        new Book(4,'inna','bad story','data', 'https://www.nic2.pl')
      ];

      getBooks() {
          return this.books.slice();
      }

      addBook(book: Book){
        var y=0;
         for(var x of this.books){
         if(book.name===x.name){
         y+=1;
         }
      else continue;
         }
if(y===0){
this.books.push(book);
        this.booksChanged.next(this.books.slice());}
}

}
