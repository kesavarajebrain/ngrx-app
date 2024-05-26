// import this for action
import {createAction,props} from "@ngrx/store"

// define the various actions here
// export it for the using 
export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
// sending data means use props
export const customCount = createAction('customCount',props<{value:number,action:string}>());
// 
export const changeTxt = createAction('changeTxt',props<{value:string}>());