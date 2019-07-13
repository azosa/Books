import { Component, OnInit,Input } from '@angular/core';
import { Book } from '../../../shared/book.model'

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() bookAuthor: Book;

  more:boolean=false;
  constructor() { }

  ngOnInit() {
  }


      onMoreItem(){
      this.more=!this.more;
      }
}
