import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
id:number;
editMode=false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

this.route.params
.subscribe(
  (params: Params)=>{
  this.id= +params['id'];
  this.editMode=params['id'] !=null;
});
}
}
