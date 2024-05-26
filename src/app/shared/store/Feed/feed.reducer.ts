// import the create reducer
import { createReducer,on } from '@ngrx/store';
// import the actions
import { loadFeeds , createFeed} from './feed.action';
import { initialState} from "./feed.state"

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
    })
);

export function feedReducer(state: any, action: any) {
    return _feedReducer(state, action);
  }