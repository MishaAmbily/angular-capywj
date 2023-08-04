import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Exercise1Module} from "./exercise1/exercise1.module";
import {RouterModule} from "@angular/router";
import {Exercise4Module} from "./exercise4/exercise4.module";
import { Exercise2Module } from './exercise2/exercise2.module';
import { Exercise3Module } from './exercise3/exercise3.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Exercise1Module,
    Exercise2Module,
    Exercise3Module,
    Exercise4Module
  ]
})
export class ExercisesModule { }
