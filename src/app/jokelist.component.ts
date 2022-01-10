import { Component, Input } from '@angular/core';
import { JokeComponent } from './joke.component';

let joke = new JokeComponent();

@Component({
  selector: 'joke-list',
  template: `
  <div class="card card-block"
  *ngFor="let joke of jokes">
  <h4 class="card-title">{{joke.setup}}</h4>
  <p class="card-text">{{joke.punchline}}</p>
  </div>
  `,
})
export class JokeListComponent {
  jokes: JokeComponent[];
  constructor() {
    this.jokes = [
      {
        setup: 'What did the cheese say when it looked in the mirror?',
        punchline: 'Hello-Me (Halloumi)',
      },
      {
        setup: 'What kind of cheese do you use to disguise a small horse?',
        punchline: 'Mask-a-pony (Mascarpone)',
      },
      {
        setup: 'A kid threw a lump of cheddar at me',
        punchline: 'I thought ‘That’s not very mature’',
      },
    ];
  }
}
