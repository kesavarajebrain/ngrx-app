
// import all reducer here - for combine all reducer in a file
import {counterReducer} from "../counter.reducer";
import {feedReducer} from "../Feed/feed.reducer";

export const AppStateReducer = {
    counter:counterReducer,
    feed:feedReducer
}