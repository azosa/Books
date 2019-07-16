import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../shared/book.model';
import { MyListService } from './my-list.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit, OnDestroy {
books: Book[];
private subscription:Subscription;

  constructor(private listService: MyListService) { }

  ngOnInit() {
   this.books = this.listService.getBooks();
   this.subscription=this.listService.booksChanged
   .subscribe(
     (books: Book[])=>{
       this.books = books;
     }
   )
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
