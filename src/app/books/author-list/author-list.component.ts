import { Component, OnInit, OnDestroy} from '@angular/core';
import { Author } from '../author.model';
import { BooksService } from '../books.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit,OnDestroy {
  authors: Author[];
  subscription:Subscription;

  constructor(private booksService:BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private authService:AuthService) { }

  ngOnInit() {
   this.authors=this.booksService.getAuthors();
   this.subscription=this.booksService.authorsChanged.subscribe(
      (authors:Author[])=>{
        this.authors=authors;
      }
    )



  }


onNewAuthor(){
  if(!this.authService.isAuthenticated()){
    alert('Log in to add author')
  }

this.router.navigate(['/new-author'], {relativeTo:this.route});
}
ngOnDestroy(){
  this.subscription.unsubscribe();
}
}
