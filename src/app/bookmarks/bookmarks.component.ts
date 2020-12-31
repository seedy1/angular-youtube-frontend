import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {
  books:any = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getHistroy().subscribe( (data) =>{
        console.log(data);
        this.books = data;
    });
  }

}
