import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';

import { Book } from '../../shared/book.model'

@Component({
  selector: 'app-my-list-edit',
  templateUrl: './my-list-edit.component.html',
  styleUrls: ['./my-list-edit.component.scss']
})
export class MyListEditComponent implements OnInit {
@ViewChild('nameInput', {static: true}) nameInputRef:ElementRef;
@ViewChild('descInput', {static: true}) descInputRef:ElementRef;
@ViewChild('authorIdInput', {static: true}) authorIdInputRef:ElementRef;
@ViewChild('pubDateInput', {static: true}) pubDateInputRef:ElementRef;
@ViewChild('urlInput', {static: true}) urlInputRef:ElementRef;
@Output() bookAdded = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }
  onAddItem(){
    const name =this.nameInputRef.nativeElement.value;
    const desc = this.descInputRef.nativeElement.value
    const authorId =this.authorIdInputRef.nativeElement.value;
    const pubDate = this.pubDateInputRef.nativeElement.value
    const  url =this.urlInputRef.nativeElement.value;
    const newBook = new Book(authorId,name,pubDate,desc,url);
    this.bookAdded.emit(newBook);
  }
}
