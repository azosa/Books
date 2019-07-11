import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Author } from '../author.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  @Output() authorWasSelected=new EventEmitter<Author>();
  authors: Author[] = [
    new Author(1,"J. K. Rowling"," born 31 July 1965",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/J._K._Rowling_2010.jpg/729px-J._K._Rowling_2010.jpg"),
    new Author(2,"Stephen King"," born 21 September 1947",
    "https://pmcvariety.files.wordpress.com/2017/08/stephen-king.jpg?w=1000")
  ];
  constructor() { }

  ngOnInit() {
  }
onAuthorSelected(author: Author){
this.authorWasSelected.emit(author);

}
}
