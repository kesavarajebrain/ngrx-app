import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import our state modal
import { counterModal } from '../../shared/store/counter.modal';
// import observable
import {Observable} from 'rxjs';
// import our selector method 3
import { getCounter } from '../../shared/store/counter.selector';
// import common appstate modal file - configured all state modal in one file
import {AppStateModal} from "../../shared/store/global/App.state.modal";

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.css',
})
export class CounterDisplayComponent implements OnInit {
  // method 1
  // before adding our modal file we give like this seprately
  // constructor(private store : Store<{counter:{counter:number}}>){}

  // method 2
  // constructor(private store: Store<{ counter: counterModal }>) {}

  //method 3
  // proper way of split all the files and use it in efficient way like below
   constructor(private store: Store<AppStateModal>) {}

  counterData: any;

  // counterData$ !: Observable<counterModal>;
  ngOnInit(): void {
    // this is also a observable - another method
    // this.store.select('counter').subscribe((data) => {
    //   this.counterData = data.counter;
    // });

    // this.counterData$ = this.store.select('counter');
    // console.log('counter display')

    // method 3
    this.store.select(getCounter).subscribe((data) => {
      this.counterData = data;
    });
  }
}
