import {createFeatureSelector,createSelector} from "@ngrx/store";

import { feedModal , feeds} from "../Feed/feed.modal";

const getFeedState = createFeatureSelector<feeds>('feed');

// get our all feeds data 
export const getFeeds = createSelector(getFeedState,(state)=>{
    return state.feedList;
});

// get feed by id - for edit purpose
// here we find feedId means from component we got and find with state feedlist
export const getFeedById =(feedId:number)=>createSelector(getFeedState,(state)=>{
    return state.feedList.find((feed:feedModal)=>feed.id === feedId) as feedModal;
});
