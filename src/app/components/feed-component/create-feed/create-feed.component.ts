import { Component, Inject, OnInit } from '@angular/core';
// mat dialog
import { MatDialogRef } from '@angular/material/dialog';
// form builder
import { FormBuilder, Validators } from '@angular/forms';
// import modal
import { feedModal } from '../../../shared/store/Feed/feed.modal';
// import store
import { Store } from '@ngrx/store';
// app state modal
import { AppStateModal } from '../../../shared/store/global/App.state.modal';
// import actions
import { createFeed ,updateFeed} from '../../../shared/store/Feed/feed.action';
// import mat dialog data- for get data from display feed page
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import selector
import { getFeedById } from '../../../shared/store/Feed/feed.selector';

@Component({
  selector: 'app-create-feed',
  templateUrl: './create-feed.component.html',
  styleUrl: './create-feed.component.css',
})
export class CreateFeedComponent implements OnInit {
  pageTitle = '';
  editFeedId = 0;
  editData!: feedModal;
  constructor(
    private dialogref: MatDialogRef<CreateFeedComponent>,
    private builder: FormBuilder,
    private store: Store<AppStateModal>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    console.log(this.data);
    // for bind add / edit in the popup
    this.pageTitle = this.data.title;
    console.log(this.pageTitle);
    // if edit mode means
    if (this.data.isEdit) {
      this.editFeedId = this.data.id;
      // here we pass the feed id for fetch specific feed
      this.store.select(getFeedById(this.editFeedId)).subscribe((_data) => {
        this.editData = _data;
        console.log(_data);
        // set values in form
        this.feedForm.setValue({
          id: this.editData.id,
          title: this.editData.title,
          content: this.editData.content,
        });
      });
    }
  }

  saveFeed() {
    if (this.feedForm.valid) {
      const _feedData: feedModal = {
        id: 0,
        title: this.feedForm.value.title as string,
        content: this.feedForm.value.content as string,
      };
      if (this.data.isEdit) {
        // update feed
        _feedData.id = this.editData.id;
        this.store.dispatch(updateFeed({ feedData: _feedData }));
      } else {
        // create feed 
        // dispatch to the action
        this.store.dispatch(createFeed({ feedData: _feedData }));
      }

      // close popup
      this.close();
    }
  }

  close() {
    this.dialogref.close();
  }

  feedForm = this.builder.group({
    id: this.builder.control(0),
    title: this.builder.control('', Validators.required),
    content: this.builder.control('', Validators.required),
  });
}
