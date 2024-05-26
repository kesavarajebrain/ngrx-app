import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import state modal
import { counterModal } from './shared/store/counter.modal';
// import action
import { changeTxt } from './shared/store/counter.action';
// import rxjs
import { Observable } from 'rxjs';
// import our selector method 3
import { getCounterName } from './shared/store/counter.selector';
// import common appstate modal file - configured all state modal in one file
import {AppStateModal} from "./shared/store/global/App.state.modal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppStateModal>) {}

  displayCounterName = '';
  // method 2
  // counterName$! : Observable<counterModal>
  ngOnInit() {
    // method 1
    // this.store.select('counter').subscribe((data)=>{
    //   this.displayCounterName = data.counterName;
    // })

    // method 2
    // this.counterName$ = this.store.select('counter')
    // console.log('counter name')

    // method 3
    // we specify the selector where we want to get the data from the state by its name
    this.store.select(getCounterName).subscribe((data) => {
      this.displayCounterName = data;
    });
  }

  changeTxt() {
    this.store.dispatch(changeTxt({ value: 'NGRX - Counter Example' }));
  }
}
