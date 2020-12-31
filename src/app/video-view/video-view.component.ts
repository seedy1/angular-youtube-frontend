import { Component, Input, OnInit } from '@angular/core';
import {SearchService} from "../search.service";


@Component({
  selector: 'app-video-view',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.scss']
})
export class VideoViewComponent implements OnInit {


  constructor(private _serachService: SearchService){}

  @Input() results!: "";

  ngOnInit(): void {
    console.log("init");
  }

    //  results = this._serachService.result;
  



}
