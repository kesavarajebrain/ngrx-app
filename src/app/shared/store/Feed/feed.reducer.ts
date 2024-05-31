// import the create reducer
import { createReducer,on } from '@ngrx/store';
// import the actions
import { loadFeeds , createFeed , updateFeed, deleteFeed} from './feed.action';
import { initialState} from "./feed.state";
// import modal
import {feedModal } from "./feed.modal";

const _feedReducer = createReducer(initialState,
    on(loadFeeds,(state)=>{
        return {
            ...state
        }
    }),

    // create feed
    on(createFeed,(state,action)=>{
        const _feed = {...action.feedData}
        _feed.id = state.feedList.length + 1
        return {
            ...state,
            feedList:[...state.feedList,_feed]
        }
    }),

     // update feed
     on(updateFeed,(state,action)=>{
        const _feed = {...action.feedData}
        const updatedFeed = state.feedList.map(f=>{
           return f.id ===_feed.id?_feed:f
        })
        return {
            ...state,
            feedList:updatedFeed
        }
    }),

       // delete feed
       on(deleteFeed,(state,action)=>{
        const deletedFeed = state.feedList.filter((data:feedModal)=>{
           return data.id !== action.id
        })
        return {
            ...state,
            feedList:deletedFeed
        }
    }),

);

export function feedReducer(state: any, action: any) {
    return _feedReducer(state, action);
  }