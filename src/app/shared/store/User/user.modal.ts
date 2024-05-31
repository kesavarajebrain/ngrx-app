export interface userModal{
    id:number,
    name:string,
    username:string,
    email: string,
    address: {},
    phone:number,
    website:string,
    company:{}
}

export interface users{
    usersList:userModal[],
    // handling error
    ErrorMessage :string;
}