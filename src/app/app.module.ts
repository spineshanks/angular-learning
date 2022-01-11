import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {JokeComponent} from './joke.component';
import { JokeListComponent } from './jokelist.component';
import {NgIfExampleComponent} from './ngifexample.component';
import {NgForExampleComponent} from './ngforexample.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, JokeComponent, JokeListComponent, NgForExampleComponent,NgIfExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
