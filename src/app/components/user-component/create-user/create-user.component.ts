import { Component, Inject, OnInit } from '@angular/core';
// mat dialog
import { MatDialogRef } from '@angular/material/dialog';
// form builder
import { FormBuilder, Validators } from '@angular/forms';
// import modal
import { userModal,users } from '../../../shared/store/User/user.modal';
// import store
import { Store } from '@ngrx/store';
// app state modal
import { AppStateModal } from '../../../shared/store/global/App.state.modal';
// import actions
import {addUser, updateUser} from '../../../shared/store/User/user.action';
// import mat dialog data- for get data from display feed page
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getUserById } from '../../../shared/store/User/user.selector';
// import selector

@Component({
  selector: 'app-create-user',
  templateUrl:'./create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit{
  pageTitle = '';
  editUserId = 0;
  editData!: userModal;
  constructor( private dialogref: MatDialogRef<CreateUserComponent>,
    private builder: FormBuilder,
    private store: Store<AppStateModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    console.log(this.data);
    // for bind add / edit in the popup
    this.pageTitle = this.data.type;
    console.log(this.pageTitle);
    // if edit mode means
    if (this.data.isEdit) {
      this.editUserId = this.data.id;
      // here we pass the feed id for fetch specific feed
      this.store.select(getUserById(this.editUserId)).subscribe((_data) => {
        this.editData = _data;
        console.log(_data);
        // set values in form
        this.userForm.setValue({
          id: this.editData.id,
          name: this.editData.name,
          email: this.editData.email,
          website:this.editData.website
        });
      });
    }
  }

  
  userForm = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.required),
    website: this.builder.control('', Validators.required),
  });

  saveUser(){
    if(this.userForm.valid){
      const _userData: userModal = {
        id:  this.userForm.value.id as number,
        name: this.userForm.value.name as string,
        email: this.userForm.value.email as string,
        website: this.userForm.value.website as string,
        username: '',
        address: {},
        phone: 0,
        company: {}
      };
      if (this.data.isEdit) {
       // update feed
       _userData.id = this.editData.id;
       this.store.dispatch(updateUser({ usersList: _userData }));
      }
      else{
        console.log(this.userForm.value)
        this.store.dispatch(addUser({usersList: _userData}));
      }
      this.close()
    }
  }

  close() {
    this.dialogref.close();
  }
}
