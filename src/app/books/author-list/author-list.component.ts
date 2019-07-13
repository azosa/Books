import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Author } from '../author.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  @Output() authorWasSelected=new EventEmitter<Author>();


  authors: Author[];
  constructor(private booksService:BooksService) { }

  ngOnInit() {
    this.authors=this.booksService.getAuthors();
  }
onAuthorSelected(author: Author){
this.authorWasSelected.emit(author);

}
}
