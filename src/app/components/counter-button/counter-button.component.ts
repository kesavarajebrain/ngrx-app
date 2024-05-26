import { Component } from '@angular/core';
// import store
import { Store } from '@ngrx/store';
// import actions file
import {increment,decrement,reset} from "../../shared/store/counter.action"
// import state modal
import {counterModal} from "../../shared/store/counter.modal";
// import common appstate modal file - configured all state modal in one file
import {AppStateModal} from "../../shared/store/global/App.state.modal";

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})

export class CounterButtonComponent {
  // config our store which name provided in app.module
  
  // before adding our modal file we give like this seprately
  // constructor(private store : Store<{counter:{counter:number}}>){}

  constructor(private store: Store<AppStateModal>){}
 
  stateData:any

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
