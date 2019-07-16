import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../shared/book.model';
import {Author} from '../author.model'
import { BooksService } from '../books.service';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {


  // @Input() bookAuthor: Book;
  // @Input() book: Book;

  selectedAuthor: Author;
  id:number;
  index:number;


  books: Book[];
  constructor(private booksService:BooksService,  private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params)=>{
        this.id = +params['id'];
        this.selectedAuthor=this.booksService.getAuthor(this.id);
      }
    )

this.books= this.booksService.getBooks();


  }
  onNewBook(){
    console.log(this.books)
this.router.navigate(['/new-book'], {relativeTo:this.route});
  }
//   onBookSelected(){
//     this.booksService.bookSelected.emit(this.book);


// }
}
