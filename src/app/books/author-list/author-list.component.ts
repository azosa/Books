import { Component, OnInit} from '@angular/core';
import { Author } from '../author.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: Author[];
  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.authors=this.booksService.getAuthors();
  }

}
