import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyListComponent } from './my-list.component';
import { MyListEditComponent } from './my-list-edit/my-list-edit.component';

@NgModule({
declarations:[
    MyListComponent,
    MyListEditComponent
],
imports:[
CommonModule,
FormsModule,
ReactiveFormsModule
]
})
export class MyListModule{

}
