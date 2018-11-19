import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';

import {
  MatButtonModule, MatExpansionModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule
} from '@angular/material';
import { RoomComponent } from './room/room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { rootReducer, INITIAL_STATE } from './redux/store';
import { createStore } from 'redux';
import { IAppState } from './redux/iAppState';
import { NgRedux, NgReduxModule } from '@angular-redux/store';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    store: NgRedux<IAppState>
  ) {
    store.configureStore(
      rootReducer, INITIAL_STATE
    );
  }
}



