import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
// import the store
import { StoreModule } from '@ngrx/store';
// import our reducer
import { counterReducer } from './shared/store/counter.reducer';
import { feedReducer } from './shared/store/Feed/feed.reducer';
// components
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { DisplayFeedComponent } from './components/feed-component/display-feed/display-feed.component';
// after installed devtools see this
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import our app state (combined reducers file)
import { AppStateReducer } from './shared/store/global/App.state.reducer';
import { CreateFeedComponent } from './components/feed-component/create-feed/create-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent,
    CustomCounterComponent,
    DisplayFeedComponent,
    CreateFeedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // before combine reducer we config the store and our reducers like below
    // StoreModule.forRoot({ counter: counterReducer, feed: feedReducer }, {}),
    // now combine all reducers like below
    StoreModule.forRoot(AppStateReducer),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    // after installed devtools see this
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
