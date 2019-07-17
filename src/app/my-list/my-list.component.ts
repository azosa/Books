import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../shared/book.model';
import { MyListService } from './my-list.service';
import { Subscription } from 'rxjs';
import { Author } from '../books/author.model';
import { BooksService } from '../books/books.service';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit, OnDestroy {
books: Book[];
authors: Author[];

private subscriptionB:Subscription;private subscriptionA:Subscription;

  constructor(private listService: MyListService,private booksService: BooksService) { }

  ngOnInit() {

    this.authors = this.booksService.getAuthors();
    this.subscriptionA=this.booksService.authorsChanged
    .subscribe(
      (authors: Author[])=>{
        this.authors = authors;
      }
    )
   this.books = this.listService.getBooks();
   this.subscriptionB=this.listService.booksChanged
   .subscribe(
     (books: Book[])=>{
       this.books = books;
     }
   )

  }
  onEditItem(index:number){
this.listService.bookEditing.next(index);
  }
  ngOnDestroy(){
    this.subscriptionA.unsubscribe(); this.subscriptionB.unsubscribe();
  }

}
