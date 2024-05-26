// import the create reducer
import { createReducer,on } from '@ngrx/store';
// import the actions
import { increment, decrement, reset, customCount, changeTxt } from './counter.action';
import { initialState} from "./counter.state"
// name it our reducer
const _counterReducer = createReducer(initialState,
  // in redux we diiferenticiate with case, here is on()
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),

  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),

  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  }),

  on(customCount, (state,action) => {
    return {
      ...state,
      counter: action.action=='plus'?state.counter + action.value:state.counter - action.value,
    };
  }),

  on(changeTxt, (state,action) => {
    return {
      ...state,
      counterName: action.value
    };
  })
);


export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
