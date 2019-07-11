import { Component, OnInit } from '@angular/core';
import { Author } from './author.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
selectedAuthor: Author;

  constructor() { }

  ngOnInit() {
  }

}
