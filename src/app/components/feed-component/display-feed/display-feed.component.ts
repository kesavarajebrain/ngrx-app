import { Component, OnInit } from '@angular/core';
// import store
import {Store} from "@ngrx/store";
// import modal
import {feedModal} from "../../../shared/store/Feed/feed.modal";
// import selector
import {getFeeds} from "../../../shared/store/Feed/feed.selector";
// import actions
import {deleteFeed} from "../../../shared/store/Feed/feed.action";
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
    this.openMatModal(0,'Add Feed')
  }

  // for find is edit or not so add args like below
  openMatModal(id:any,title:any,isEdit=false){
    this.dialog.open(CreateFeedComponent,{
      width:`40%`,
      // for update data
      data:{
        id: id,
        title:title,
        isEdit:isEdit
      }
    });
  }
   

    editFeed(id:any){
      this.openMatModal(id,"Update Feed",true)
    }

    deleteFeed(id:any){
      if(confirm("Are you sure want to delete?")){
        this.store.dispatch(deleteFeed({id:id}));
      }
    }
  }



