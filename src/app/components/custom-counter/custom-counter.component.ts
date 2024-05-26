import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import actions file
import { customCount } from '../../shared/store/counter.action';
// import our state modal
import { counterModal } from '../../shared/store/counter.modal';
// import common appstate modal file - configured all state modal in one file
import {AppStateModal} from "../../shared/store/global/App.state.modal";

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.css',
})
export class CustomCounterComponent {
  customcount!: number;
  // before adding our modal file we give like this seprately
  // constructor(private store : Store<{counter:{counter:number}}>){}

  constructor(private store: Store<AppStateModal>) {}

  plus() {
    this.store.dispatch(
      customCount({ value: this.customcount, action: 'plus' })
    );
  }

  minus() {
    this.store.dispatch(
      customCount({ value: this.customcount, action: 'minus' })
    );
  }
}
