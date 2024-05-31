// import the create reducer
import { createReducer,on } from '@ngrx/store';
// import the actions
import { loadUsers , loadUsersFailure, loadUsersSuccess, addUser, updateUser, deleteUser} from './user.action';
import { initialState} from "./user.state";
import { userModal } from './user.modal';

const _userReducer = createReducer(initialState,
    on(loadUsers,(state)=>{
        return {
            ...state
        }
    }),
    on(loadUsersSuccess,(state,action)=>{
        return{
            ...state,
            usersList:[...action.usersList],
            // define error message
            ErrorMessage:''
        }
    }),
    // error handling
    on(loadUsersFailure,(state,action)=>{
        console.log("*********",action.ErrorMessage);
        return{
            ...state,
            usersList:[],
            // define error message
            ErrorMessage: action.ErrorMessage
        }
    }),

    // add user 
    on(addUser,(state,action)=>{
        const _user = {...action.usersList}
        _user.id = state.usersList.length + 1
        return {
            ...state,
            usersList:[...state.usersList,_user]
        }
    }),

       // update user 
       on(updateUser,(state,action)=>{
        const _user = {...action.usersList}
        const updateUser = state.usersList.map((user)=>{
            return user.id === action.usersList.id?_user:user
        })
        
        return {
            ...state,
            usersList:updateUser
        }
    }),

    // delete user
    on(deleteUser,(state,action)=>{
        const deleteUser = state.usersList.filter((user:userModal)=>{
            return user.id !== action._id
        })
        
        return {
            ...state,
            usersList:deleteUser
        }
    }),
);

export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
  }