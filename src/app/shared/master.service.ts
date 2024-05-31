import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import user modal
import {userModal } from "../shared/store/User/user.modal";
// 
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<userModal[]>{
    return this.http.get<userModal[]>("https://jsonplaceholder.typicode.com/users")
  }
}

