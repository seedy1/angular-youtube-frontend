import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient){}

  private apiUrl = "http://localhost:8000/history/";

  public getHistroy(){
    return this.httpClient.get("http://localhost:8000/history/");
  }
  public getBookmarks(){
    return this.httpClient.get("http://localhost:8000/bookmarks/");
  }
}
