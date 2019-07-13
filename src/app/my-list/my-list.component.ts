import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
import { MyListService } from './my-list.service';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
books: Book[];

  constructor(private listService: MyListService) { }

  ngOnInit() {
   this.books = this.listService.getBooks();
   this.listService.booksChanged.subscribe(
     (books: Book[])=>{
       this.books = books;
     }
   )
  }

}
