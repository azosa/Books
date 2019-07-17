import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, MaxLengthValidator } from '@angular/forms';
import { BooksService } from '../books.service';
import { Author } from '../../books/author.model';
import { AuthorListComponent } from '../author-list/author-list.component';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
id:number;
editMode=false;
authorForm:FormGroup;
authors:Author[];
forbiddenAuthors=[];
subscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, private booksService: BooksService) { }

  ngOnInit() {
     this.authors=this.booksService.getAuthors();
    this.subscription=this.booksService.authorsChanged.subscribe(
      (authors:Author[])=>{
        this.authors=authors;
      }
    )


  for(let author of this.authors)
  {
  this.forbiddenAuthors.push(author.name);
  }

this.route.params
.subscribe(
  (params: Params)=>{
  this.id= +params['id'];
  this.editMode=params['id'] !=null;
  this.initForm();
});

}
private initForm(){
  let authorName="";
  let authorDesc="";
  let authorImage="";
  let authorDate=null;
  if(this.editMode){
  const author = this.booksService.getAuthor(this.id);
  authorName=author.name;
  authorDesc=author.desc;
  authorImage=author.imagePath;
  authorDate=author.date.toISOString().substring(0,10);

  }
  this.authorForm = new FormGroup({
'name': new FormControl(authorName, [Validators.required,this.forbiddenNames.bind(this)]),
'imagePath':new FormControl(authorImage,[Validators.required,Validators
  .pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]),
'desc': new FormControl(authorDesc,Validators.required),
'date': new FormControl(authorDate)
  });

}
onSubmit(){
  let authorId;
  let autho=[];
  if(this.authors.length>0){
   for(let i=0;i<this.authors.length;i++){
    autho.push(this.authors[i].authorId);
   }
    authorId= Math.max(...autho)+1;
  }
  else{
    authorId=this.authors.length;
  }
  const newAuthor=new Author(authorId,this.authorForm.value['name'],this.authorForm.value['date'],this.authorForm.value['desc'],this.authorForm.value['imagePath'],);


  if(this.editMode){
    this.booksService.updateAuthor(this.id,newAuthor);
  }
  else{
  this.booksService.addAuthor(newAuthor);
  }
 this.onCancel();

}

forbiddenNames(control: FormControl):{[s:string]:boolean}{
  if(!this.editMode){
if (this.forbiddenAuthors.indexOf(control.value)!== -1){
  return {'nameIsForbidden':true}
}
return null
}}
onCancel(){
  this.router.navigate(['../'], {relativeTo:this.route});
}

}
