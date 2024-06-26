// import this for action
import {createAction,props} from "@ngrx/store"
// import modal
import {feedModal} from "./feed.modal";
// define the various actions here
// export it for the using 
export const loadFeeds = createAction('loadFeeds');

// add action for create feed
export const createFeed = createAction('createFeed',props<{feedData:feedModal}>());
// update action
export const updateFeed = createAction('updateFeed',props<{feedData:feedModal}>());
// delete action
export const deleteFeed = createAction('deleteFeed',props<{id:number}>());