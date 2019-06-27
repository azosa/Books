import { Component, OnInit } from '@angular/core';
import { Author } from '../author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [
    new Author("J. K. Rowling"," born 31 July 1965",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/729px-J._K._Rowling_2010.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
