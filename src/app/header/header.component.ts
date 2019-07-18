import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http'
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorage: DataStorageService, private authService:AuthService) { }

  ngOnInit() {
  }

onSaveData(){
this.dataStorage.storeAuthors().subscribe(
  (response: Response)=>{
    console.log(response)
  }
  );
this.dataStorage.storeBooks()
.subscribe(
(response: Response)=>{
  console.log(response)
}
);
this.dataStorage.storeMyList()
.subscribe(
(response: Response)=>{
  console.log(response)
}
);

}
onFetchData(){
this.dataStorage.getAuthors();
this.dataStorage.getBooks();
this.dataStorage.getMyList();
}
onLogout(){
this.authService.logout();
}
}
