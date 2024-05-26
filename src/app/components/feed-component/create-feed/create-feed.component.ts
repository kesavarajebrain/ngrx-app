import { Component } from '@angular/core';
// mat dialog
import {
  MatDialogRef,
} from '@angular/material/dialog';
// form builder
import { FormBuilder, Validators } from '@angular/forms';
// import modal
import { feedModal } from "../../../shared/store/Feed/feed.modal";
// import store
import { Store } from '@ngrx/store';
// app state modal
import {AppStateModal} from "../../../shared/store/global/App.state.modal";
// import actions
import {createFeed} from "../../../shared/store/Feed/feed.action";

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.component.html',
  styleUrl: './create-feed.component.css'
})
export class CreateFeedComponent {

  constructor(private dialogref: MatDialogRef<CreateFeedComponent>, private builder: FormBuilder,
    private store: Store<AppStateModal>
  ) { }

  saveFeed() {
    if(this.feedForm.valid){
      const _feedData:feedModal={
        id: 0,
        title: this.feedForm.value.title as string,
        content: this.feedForm.value.content as string
      }
      // dispatch to the action
      this.store.dispatch(createFeed({feedData:_feedData}))
      // close popup
      this.close()
    }
  }

  close(){
    this.dialogref.close();
  }

  feedForm = this.builder.group({
    id: this.builder.control(0),
    title:this.builder.control("", Validators.required),
    content:this.builder.control("", Validators.required),
  })

}
