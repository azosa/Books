import { Component, OnInit } from '@angular/core';
import { Book } from '../../shared/book.model';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = [
    new Book("Harry Potter and the Philosopher's Stone",
    "Publication date: 26 June 1997(UK), 1 September 1998(US)","https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
