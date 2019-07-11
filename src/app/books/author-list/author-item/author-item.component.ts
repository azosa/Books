import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Author } from '../../author.model';

@Component({
  selector: 'app-author-item',
  templateUrl: './author-item.component.html',
  styleUrls: ['./author-item.component.scss']
})
export class AuthorItemComponent implements OnInit {
@Input() author: Author;
@Output() authorSelected=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
this.authorSelected.emit();
  }

}
