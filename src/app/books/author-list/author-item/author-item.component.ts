import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../../author.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
@Input() author: Author;
@Input() index:number;
constructor(private router: Router, private route: ActivatedRoute){}

  ngOnInit() {
  }
  onEditAuthor(){
this.router.navigate([this.index,'edit'],{relativeTo: this.route});
  }

}
