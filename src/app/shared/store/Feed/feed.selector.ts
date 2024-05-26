import {createFeatureSelector,createSelector} from "@ngrx/store";

import { feedModal , feeds} from "../Feed/feed.modal";

const getFeedState = createFeatureSelector<feeds>('feed');

// get our individual state  data 
export const getFeeds = createSelector(getFeedState,(state)=>{
    return state.feedList;
});
