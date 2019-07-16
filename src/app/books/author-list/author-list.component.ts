import { Component, OnInit} from '@angular/core';
import { Author } from '../author.model';
import { BooksService } from '../books.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
  authors: Author[];

  constructor(private booksService:BooksService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.authors=this.booksService.getAuthors();
  }
onNewAuthor(){
console.log(this.authors)
this.router.navigate(['/new-author'], {relativeTo:this.route});
}
}
