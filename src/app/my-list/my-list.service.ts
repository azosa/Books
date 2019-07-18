import { Book } from '../shared/book.model'

import { Subject } from 'rxjs';

export class MyListService {
    booksChanged = new Subject<Book[]>();
    bookEditing= new Subject<number>()

    private books: Book[] = [
        new Book(0, 'Fantastic Beasts and Where to Find Them', new Date(1/12/2001), 'In the year 1926 in the Harry Potter universe, the dark wizard Gellert Grindelwald is terrorizing the magical community. Witches and wizards from all over the world are on high alert as he prepares to launch his next attack.', 'https://upload.wikimedia.org/wikipedia/en/8/8d/Fantastic_beasts.JPG'),
        new Book(1, 'It',new Date(15/9/1986), 'A promise made twenty-eight years ago calls seven adults to reunite in Derry, Maine, where as teenagers they battled an evil creature that preyed on the citys children.', 'https://upload.wikimedia.org/wikipedia/en/5/5a/It_cover.jpg')
    ];
    setBooks(books:Book[]){
        this.books=books;
        this.booksChanged.next(this.books.slice());
        }
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
