import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Links} from "../model/links";
import { SearchService } from '../search.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchForm!: FormGroup;
  result: string ="";
  // id: string;

  constructor(private service: SearchService){ }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      videoLink: new FormControl("")
    });
  }


  search(){
    // e.preventDefault();
    // this.result = this.searchForm.value.videoLink;
    this.result = this.searchForm.value.videoLink;
    this.service.result = this.result;
    // this.id = this.getVideoID(this.result)
    this.service.searchForVideo();
    
  }

  //getVideoID(url: string){
    //const regExp = "/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/";
    //var match = url.match(regExp);
    //if ( match && match[7].length == 11){
      //return match[7];
    //}else{
      //console.log("NULL");
    //}
  //}
/*
  getVideoID(url: string){
    var id = '';
    url = ""
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
      id = url[2].split(/[^0-9a-z_\-]/i);
      id = id[0];
    }
    else {
      id = url;
    }
      return id;
  }

  */

}
