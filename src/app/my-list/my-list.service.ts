import { Book } from '../shared/book.model'

import { Subject } from 'rxjs';

export class MyListService {
    booksChanged = new Subject<Book[]>();
    bookEditing= new Subject<number>()

    private books: Book[] = [
        new Book(1, 'alicja', new Date(22/2/1990), 'nice story', 'https://www.nic.pl'),
        new Book(2, 'inna',new Date(22/2/1990), 'bad story', 'https://www.nic2.pl')
    ];

    getBooks() {
        return this.books.slice();
    }
getBook(index:number){
    return this.books[index];
}
UpdateBook(index:number, newBook: Book){
this.books[index]= newBook;
this.booksChanged.next(this.books.slice());

}
deleteBook(index:number){
    this.books.splice(index,1);
    this.booksChanged.next(this.books.slice());
}
    addBook(book: Book) {
        var y = 0;
        for (var x of this.books) {
            if (book.name === x.name && book.authorId===x.authorId) {
                y += 1;
            }
            else continue;
        }
        if (y === 0) {
            this.books.push(book);
            this.booksChanged.next(this.books.slice());
        }
    }

}
