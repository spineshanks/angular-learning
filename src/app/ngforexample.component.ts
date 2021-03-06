import { Component} from '@angular/core';

@Component({
  selector: 'ngfor-example',
  template: `
  <h4>NgFor (grouped)</h4>
  <ul *ngFor="let group of peopleByCountry;let i=index">
   <li>{{i+1}} {{ group.country }}</li>
   <ul>
   <li *ngFor="let person of group.people;let j=index">
   {{j+1}} {{ person.name }}
   </li>
   </ul>
  </ul>
 `
})

export class NgForExampleComponent{
  peopleByCountry: any[] = [
    {
    'country': 'UK',
    'people': [
    {
    "name": "Douglas Pace"
    },
    {
    "name": "Mcleod Mueller"
    },
    ]
    },
    {
    'country': 'US',
    'people': [
    {
    "name": "Day Meyers"
    },
    {
    "name": "Aguirre Ellis"
    },
    {
    "name": "Cook Tyson"
    }
    ]
    }
    ];
}
