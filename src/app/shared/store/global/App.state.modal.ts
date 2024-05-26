// import our modals here
import { counterModal } from "../counter.modal";
import { feedModal ,feeds} from "../Feed/feed.modal";

export interface AppStateModal {
    counter:counterModal,
    // previously like this bcz only one obj in the feed modal 
   // feed:feedModal[]
   // now we separete it feedmodal have each objs but feeds have multiple feeds
   feed:feeds
}