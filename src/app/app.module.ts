import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyListService } from './my-list/my-list.service';
import { BooksService } from './books/books.service';
import {DataStorageService } from './shared/data-storage.service';

import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { BooksModule } from './books/books.module';
import { SharedModule } from './shared/shared.module';
import { MyListModule } from './my-list/my-list.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    BooksModule,
    SharedModule,
    MyListModule,
    AuthModule
  ],
  providers: [MyListService, BooksService, DataStorageService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
