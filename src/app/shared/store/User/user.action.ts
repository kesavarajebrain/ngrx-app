// import this for action
import {createAction,props} from "@ngrx/store"
// import modal
import {userModal} from "./user.modal";

// const values for load users
export const LOAD_USERS = "[user page] load users";
export const LOAD_USERS_SUCCESS = "[user page] load users success";
// error handling
export const LOAD_USERS_FAILURE = "[user page] load users failure";
// add actions here 
export const loadUsers = createAction(LOAD_USERS);
export const loadUsersSuccess = createAction(LOAD_USERS_SUCCESS,props<{usersList:userModal[]}>());
// handle error
export const loadUsersFailure = createAction(LOAD_USERS_FAILURE,props<{ErrorMessage:string}>());


// add const values for add users
export const ADD_USER = "[user page] add user";
export const ADD_USER_SUCCESS = "[user page] add user success";
// update user
export const UPDATE_USER = "[user page] update user";
// delete user
export const DELETE_USER = "[user page] delete user";
// add user
export const addUser=  createAction(ADD_USER,props<{usersList:userModal}>());
// export const addUserSuccess= createAction(ADD_USER_SUCCESS,props<{usersList:userModal[]}>());

// update user
export const updateUser=  createAction(UPDATE_USER,props<{usersList:userModal}>());
// delete user
export const deleteUser=  createAction(DELETE_USER,props<{_id:number}>());





























