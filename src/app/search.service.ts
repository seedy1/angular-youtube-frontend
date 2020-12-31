import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  $searchLink = new EventEmitter();
  result: string = "";

  constructor() { }

  searchForVideo(){
    console.log("Current link: "+this.result);
    return this.result;
  }

  getID(){
    // return "GYAB4Td62zI";
    return "69VeYoKzL6I";
  }
}
