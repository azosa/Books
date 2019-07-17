import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorage: DataStorageService) { }

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
}
onFetchData(){
this.dataStorage.getAuthors();
this.dataStorage.getBooks();
}

}
