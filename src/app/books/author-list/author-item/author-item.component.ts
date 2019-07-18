import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../author.model';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from '../../books.service';
import { AuthService } from '../../../auth/auth.service';


@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
@Input() author: Author;
@Input() index:number;


constructor(private router: Router, private route: ActivatedRoute, private booksService:BooksService,private authService:AuthService){}

  ngOnInit() {
  }
  onEditAuthor(){
    if(!this.authService.isAuthenticated()){
      alert('Log in to edit author')
    }

this.router.navigate([this.index,'edit'],{relativeTo: this.route});
  }
  onDeleteAuthor(){
    var answer=confirm("Are you sure?")
    if(answer){ this.booksService.deleteAuthor(this.index);}

  }

}
