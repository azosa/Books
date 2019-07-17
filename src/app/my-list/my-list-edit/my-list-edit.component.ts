import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';

import { Book } from '../../shared/book.model'
import { MyListService } from '../my-list.service';
import { Author } from '../../books/author.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-my-list-edit',
  templateUrl: './my-list-edit.component.html',
  styleUrls: ['./my-list-edit.component.scss']
})
export class MyListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: true }) mlForm: NgForm;
  @Input() authors: Author[];
  private subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Book;
  constructor(private listService: MyListService) { }

  ngOnInit() {
    this.subscription = this.listService.bookEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.listService.getBook(index);
          this.mlForm.setValue({
            author: this.editedItem.authorId,
            title: this.editedItem.name,
            pubDate: this.editedItem.date,
            desc: this.editedItem.desc,
            cover: this.editedItem.imagePath
          })
        }
      );


  }
  onSubmit(form: NgForm) {
    const value = form.value;

    const newBook = new Book(+value.author, value.title, value.pubDate, value.desc, value.cover);
    if (this.editMode) {
      this.listService.UpdateBook(this.editedItemIndex, newBook);
    } else { this.listService.addBook(newBook); }
    this.editMode = false;
    form.reset();
  }
  onClear() {
this.mlForm.reset();
this.editMode=false;
  }
  onDelete(){
this.listService.deleteBook(this.editedItemIndex);
this.onClear();
  }
  ngOnDestroy() {

    this.subscription.unsubscribe();
  }
}



