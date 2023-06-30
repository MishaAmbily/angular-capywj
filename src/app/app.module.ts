import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import { Exercise1Component } from './exercises/exercise1/exercise1.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //RouterModule.forRoot([{
      //path: 'exercises',
     // loadChildren: () =>   import('./exercises/exercises.module').then((m) => m.ExercisesModule),
    //}]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
