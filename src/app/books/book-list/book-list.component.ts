import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Book } from '../../shared/book.model';
import {Author} from '../author.model'
import { BooksService } from '../books.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit,OnDestroy {
  selectedAuthor: Author;
  id:number;
  index:number;
  subscription:Subscription;


  books: Book[];
  constructor(private booksService:BooksService,  private route: ActivatedRoute, private router:Router,private authService:AuthService) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.selectedAuthor=this.booksService.getAuthor(this.id);
      }
    )

this.books= this.booksService.getBooks();
this.subscription=this.booksService.booksChanged
   .subscribe(
     (books: Book[])=>{
       this.books = books;
     }
   )

  }
  onNewBook(){
    if(!this.authService.isAuthenticated()){
      alert('Log in to add book')
    }
this.router.navigate(['/new-book'], {relativeTo:this.route});
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }
}
