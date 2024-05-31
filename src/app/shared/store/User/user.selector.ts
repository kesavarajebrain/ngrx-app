import {createFeatureSelector,createSelector} from "@ngrx/store";

import { userModal , users} from "../User/user.modal";

const getUserState = createFeatureSelector<users>('user');

// get our all users data - here we get specific userslist only 
export const getUsers = createSelector(getUserState,(state)=>{
    return state.usersList;
});

// here we get the whole state previously only state there but now we added error also so we need these two states so we clup two - userslist[] and error message
export const getUsersInfo = createSelector(getUserState,(state)=>{
    return state;
});

// get user by id - for edit purpose
// here we find userId means from component we got and find with state userlist
export const getUserById =(userId:number)=>createSelector(getUserState,(state)=>{
    return state.usersList.find((user:userModal)=>user.id === userId) as userModal;
});

// get faliure scanario
export const getUsersDataFailure = createSelector(getUserState,(state)=>{
    return state.ErrorMessage;
});
