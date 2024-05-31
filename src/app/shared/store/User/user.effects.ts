// import injectable
import { Injectable } from '@angular/core';
//
import { Actions, act, createEffect, ofType } from '@ngrx/effects';
// service import
import { MasterService } from '../../master.service';
// import actions
import { loadUsers, loadUsersFailure, loadUsersSuccess } from './user.action';
// rxjs
import {
  EMPTY,
  catchError,
  exhaustMap,
  map,
  mergeMap,
  of,
  switchMap,
} from 'rxjs';
@Injectable()
export class userEffects {
  constructor(private action$: Actions, private masterService: MasterService) {}

  //
  _loadUser = createEffect(() =>
    // this.action is a observable
    this.action$
        .pipe(
            // specity case in the action with oftype
            ofType(loadUsers),
            exhaustMap((action) => {
                // here we call the api
                return this.masterService.getAllUsers().pipe(
                    map((data) => {
                        console.log("ddsdds",data);
                        return loadUsersSuccess({ usersList: data });
                    }),
                    // previously defined empty 
                    //catchError(() => EMPTY)

                    // after adding error handling
                    catchError((error) => of(loadUsersFailure({ErrorMessage:error.message})))
                )
            })
        )
);
}
