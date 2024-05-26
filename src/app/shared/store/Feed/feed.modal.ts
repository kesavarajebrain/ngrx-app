
// previously we have this below modal only , now we going to create feeds and update delete also 
export interface feedModal{
    id:number,
    title:string,
    content:string
}

// feedmodal is the modal of each feed, feeds interface is the list of feed so we seprate like below

export interface feeds{
    feedList:feedModal[]
}