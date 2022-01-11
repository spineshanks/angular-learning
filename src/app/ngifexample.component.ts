import { Component } from '@angular/core';

@Component({
  selector: 'ngif-example',
  template: `
  <pre ngNonBindable>Hello {{name}}</pre>
  <ul *ngFor="let person of people">
    <li [ngStyle]="{'color':getColor(person.country)}"> {{ person.name }} ({{
  person.country }})
    </li>
</ul>
 `,
})
export class NgIfExampleComponent {
  name="Ashish";
  getColor(country) {
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }
  people: any[] = [
    {
      name: 'Douglas Pace',
      age: 35,
      country: 'UK',
    },
    {
      name: 'Mcleod Mueller',
      age: 32,
      country: 'USA',
    },
    {
      name: 'Day Meyers',
      age: 21,
      country: 'HK',
    },
    {
      name: 'Aguirre Ellis',
      age: 34,
      country: 'UK',
    },
    {
      name: 'Cook Tyson',
      age: 32,
      country: 'USA',
    },
  ];
}
