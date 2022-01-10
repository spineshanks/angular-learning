import { Component, Input } from '@angular/core';
import {Joke} from './joke';
import {JokeFormComponent} from './jokeform.component';


@Component({
  selector: 'joke-list',
  template: `
  <joke-form (jokeCreated)="addJoke($event)"></joke-form>
  <joke *ngFor="let j of jokes" [joke]="j"></joke>
  `,
})
export class JokeListComponent {
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke('Parent 1', 'Yeah this is Joke 1'),
      new Joke('Parent 2', 'Yeah this is Joke 2'),
      new Joke('Parent 3', 'Yeah this is joke 3'),
    ];
  }

  addJoke(joke) {
    this.jokes.unshift(joke);
  }
 }
