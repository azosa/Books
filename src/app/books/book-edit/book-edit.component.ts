import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BooksService } from '../books.service';
import { Author } from '../author.model';
import { Subscription } from 'rxjs';
import { Book } from '../../shared/book.model';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit,OnDestroy {
authors:Author[];
  id:number;
  editMode=false;
 bookForm:FormGroup;
  subscription:Subscription;
  authorNumber:number;
  optionInput:number;

  constructor(private router:Router,private route: ActivatedRoute, private booksService: BooksService) { }


  ngOnInit() {
    this.authors = this.booksService.getAuthors();
    this.subscription=this.booksService.authorsChanged
    .subscribe(
      (authors: Author[])=>{
        this.authors = authors;
      }
    )
    this.route.params
.subscribe(
  (params: Params)=>{
  this.id= +params['id'];
  this.editMode=params['id'] !=null;
  this.initForm();
});
  }

  private initForm(){
    let bookAuthor=+this.authorNumber;
    let bookName="";
    let bookDesc="";
    let bookImage="";
    let bookDate=null;

    if(this.editMode){
    const book = this.booksService.getBook(this.id);
    bookAuthor=book.authorId;
    bookName=book.name;
    bookDate=book.date.toISOString().substring(0,10);
    bookDesc=book.desc;
    bookImage=book.imagePath;
    }
    this.bookForm = new FormGroup({
  'authorId': new FormControl(bookAuthor, [Validators.required,Validators.pattern(/^[0-9][0-9]*/)]),
  'name': new FormControl(bookName, Validators.required),
  'date':new FormControl(bookDate),
  'imagePath':new FormControl(bookImage, [Validators.required,Validators
    .pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]),
  'desc': new FormControl(bookDesc, Validators.required)
    });
  }
  onSubmit(){
    const newBook=new Book(+this.bookForm.value['authorId'],this.bookForm.value['name'],this.bookForm.value['date'],this.bookForm.value['desc'],this.bookForm.value['imagePath'],);
    if(this.editMode){
      this.booksService.updateBook(this.id,newBook);
    }
    else{
    this.booksService.addBook(newBook);
    }
   this.onCancel();
   console.log(this.bookForm.value['authorId']);

  }

  changeAuthor(event: Event) {
    this.authorNumber=event.target['value'];
    }

    onCancel(){

      if(this.editMode){
          this.router.navigate(['../../'], {relativeTo:this.route});
      }
      else{
         this.router.navigate(['../'], {relativeTo:this.route});
      }

    }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
