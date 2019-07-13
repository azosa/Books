import { Component, OnInit, EventEmitter,Input,Output } from '@angular/core';
import { Book } from '../../../shared/book.model'

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;
  @Input() bookAuthor: Book;
  @Output() bookSelected=new EventEmitter<void>();
  more:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
    this.bookSelected.emit();
      }

      onMoreItem(){
      this.more=!this.more;
      }
}
