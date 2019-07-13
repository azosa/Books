import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../author.model';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
@Input() author: Author;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }
  onSelected(){
this.booksService.authorSelected.emit(this.author);
  }

}
