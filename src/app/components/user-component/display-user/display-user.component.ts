import { Component ,OnInit} from '@angular/core';
// import store
import {Store} from "@ngrx/store";
// import modal
import {userModal, users} from "../../../shared/store/User/user.modal";
// import selector
import {getUsers, getUsersInfo} from "../../../shared/store/User/user.selector";
// import common appstate modal file - configured all state modal in one file
import {AppStateModal} from "../../../shared/store/global/App.state.modal";
// action import 
import {deleteUser, loadUsers} from "../../../shared/store/User/user.action";
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
import { CreateUserComponent } from '../create-user/create-user.component';
// import create feed component 
@Component({
  selector: 'app-display-user',
  templateUrl: './display-user.component.html',
  styleUrl: './display-user.component.css'
})
export class DisplayUserComponent implements OnInit {
  userList!:userModal[];
  constructor (private store : Store<AppStateModal>, private dialog:MatDialog){}

  userInfo !:users

  ngOnInit(){
    // call the api
    this.store.dispatch(loadUsers());
    this.store.select(getUsersInfo).subscribe((data)=>{
      // commented this is for one state only 
      //this.userList = data;
      
      // see the console log thats why we changed this selector we got both states 
      this.userInfo = data;
      console.log(data);  // ErrorMessage: "",
                         // usersList: (10) [])
    })
   }

   createUser(){
    this.openMatModal(0,'Add User')
  }

    // for find is edit or not so add args like below
    openMatModal(id:any,type:any,isEdit=false){
      this.dialog.open(CreateUserComponent,{
        width:`40%`,
        // for update data
        data:{
          id: id,
          type:type,
          isEdit:isEdit
        }
      });
    }

    editUser(id:any){
      this.openMatModal(id,"Update User",true)
    }

    deleteUser(id:any){
      if(confirm("Are you sure want to delete?")){
        this.store.dispatch(deleteUser({_id:id}))
      }
    }

}
