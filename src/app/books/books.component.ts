import { Component, OnInit } from '@angular/core';
import { Author } from './author.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {
selectedAuthor: Author;

  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.booksService.authorSelected.subscribe(
      (author: Author) => {
        this.selectedAuthor=author;
      }
    );
  }

}
