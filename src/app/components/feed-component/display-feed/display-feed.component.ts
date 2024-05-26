import { Component, OnInit } from '@angular/core';
// import store
import {Store} from "@ngrx/store";
// import modal
import {feedModal} from "../../../shared/store/Feed/feed.modal";
// import selector
import {getFeeds} from "../../../shared/store/Feed/feed.selector";
// import common appstate modal file - configured all state modal in one file
import {AppStateModal} from "../../../shared/store/global/App.state.modal";
// mat dialog
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
// import create feed component 
import {CreateFeedComponent} from "../create-feed/create-feed.component";

@Component({
  selector: 'app-display-feed',
  templateUrl: './display-feed.component.html',
  styleUrl: './display-feed.component.css'
})
export class DisplayFeedComponent implements OnInit{

  feedList!:feedModal[];
  constructor (private store : Store<AppStateModal>, private dialog:MatDialog){}

  ngOnInit(){
   this.store.select(getFeeds).subscribe((data)=>{
    this.feedList = data;
    console.log(this.feedList);
   })
  }

  creteFeed(){
    this.openMatModal()
  }

  openMatModal(){
    this.dialog.open(CreateFeedComponent,{
      width:`40%`
    });
  }
}
