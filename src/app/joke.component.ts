import { Component, Input } from '@angular/core';
import {Joke} from './joke';

@Component({
  selector: 'joke',
  template: `
  <div class="card card-block">
<h4 class="card-title">{{data.setup}}</h4>
<p class="card-text"
[hidden]="data.hide">{{data.punchline}}</p>
<a (click)="data.toggle()"
class="btn btn-warning">Tell Me
</a>
</div>
  `,
  styles: [`h1 { font-family: Lato; }`],
})
export class JokeComponent {
  @Input('joke') data: Joke;
}
