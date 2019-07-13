import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Book } from '../../shared/book.model';
import { Author } from '../author.model';
import { BooksService } from '../books.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Output() bookWasSelected=new EventEmitter<Book>();
  @Input() bookAuthor: Book;
  @Input() book: Book;


  books: Book[];
  constructor(private booksService:BooksService) { }

  ngOnInit() {
this.books= this.booksService.getBooks();
  }
  onBookSelected(book: Book){
    this.bookWasSelected.emit(book);}

    // onNotify(message:string) {
    //   this.more=message;
    // }


}
