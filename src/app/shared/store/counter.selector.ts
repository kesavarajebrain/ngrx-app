import {createFeatureSelector,createSelector} from "@ngrx/store";

import { counterModal} from "../store/counter.modal";

const getCounterState = createFeatureSelector<counterModal>('counter');

// get our individual state  data 
export const getCounter = createSelector(getCounterState,(state)=>{
    return state.counter;
});

export const getCounterName = createSelector(getCounterState,(state)=>{
    return state.counterName;
})