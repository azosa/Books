import { Component, OnInit, Input, Output } from '@angular/core';
import { Book } from '../../shared/book.model';
import { Author } from '../author.model';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input() book: Book;
  books: Book[] = [
    new Book(1,"Harry Potter and the Philosopher's Stone",
    "Publication date: 26 June 1997(UK), 1 September 1998(US)", "Sumary","https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"),
    new Book(2, "Skeleton Crew","Publication date: June 21, 1985", "Sumary","https://upload.wikimedia.org/wikipedia/en/f/f3/SkeletonCrewHC.jpg"),
    new Book(2, "Blockade Billy", "Publication date: April 20, 2010",  "Sumary","https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Blockade_Billy.jpg/200px-Blockade_Billy.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
