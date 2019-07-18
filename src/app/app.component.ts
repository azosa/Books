import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'books';
  loadedFeature = 'book';
  constructor(private authService: AuthService){}
ngOnInit(){
firebase.initializeApp({
  apiKey: "AIzaSyBV8aVRHoT5FThiuP7nljvqmFBKEyLSE5Q",
  authDomain: "books-29cae.firebaseapp.com"
})
}
  onNavigate(feature: string){
this.loadedFeature = feature;
  }
}
