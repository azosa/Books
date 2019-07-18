import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Book } from '../../../../shared/book.model'
import { BooksService } from '../../../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../../auth/auth.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

 @Input() sglBook: Book;
 @Input() index:number;
  constructor(private booksService: BooksService, private route: ActivatedRoute, private router:Router, private authService:AuthService) { }

  ngOnInit() {
  }

  onAddToMyList(){
this.booksService.addBooksToMyList(this.sglBook);
  }
  onEditBook(){
    if(!this.authService.isAuthenticated()){
      alert('Log in to edit book')
    }
this.router.navigate([this.index,'edit'], {relativeTo:this.route});
  }
  onDeleteBook(){ var answer=confirm("Are you sure?")
  if(answer){ this.booksService.deleteBook(this.index);}

  }
}
