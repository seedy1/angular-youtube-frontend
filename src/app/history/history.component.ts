import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ApiService} from "../api.service";
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  his:any = [];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getHistroy().subscribe( (data)=>{
      console.log(data);
      this.his = data;
    });
    
  }


}
