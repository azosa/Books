import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book.model';
@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
books: Book[]=[
  new Book(3,'alicja','nice story','data', 'https://www.nic.pl'),
  new Book(4,'inna','bad story','data', 'https://www.nic2.pl')
];

  constructor() { }

  ngOnInit() {
  }
  onBookAdded(book:Book){
this.books.push(book);
  }
}
