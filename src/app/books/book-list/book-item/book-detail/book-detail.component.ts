import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Book } from '../../../../shared/book.model'
import { BooksService } from '../../../books.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

 @Input() sglBook: Book;
 @Input() index:number;
  constructor(private booksService: BooksService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }

  onAddToMyList(){
this.booksService.addBooksToMyList(this.sglBook);
  }
  onEditBook(){
this.router.navigate([this.index,'edit'], {relativeTo:this.route});
  }
}
