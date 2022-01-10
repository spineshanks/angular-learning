import { Component, Input } from '@angular/core';

@Component({
  selector: 'joke',
  template: `<h1>My Name is Ashish</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class JokeComponent {
  setup: string;
  punchline: string;
  constructor() {
  this.setup = "What did the cheese say when it looked in the mirror?";
  this.punchline = "Halloumi (Hello Me)";
  }
  }
