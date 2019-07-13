import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Book } from '../../../../shared/book.model'
import { BooksService } from '../../../books.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

 @Input() sglBook: Book;
  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  onAddToMyList(){
this.booksService.addBooksToMyList(this.sglBook);
  }
}
