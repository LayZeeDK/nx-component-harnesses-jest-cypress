import { Component } from '@angular/core';

export enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

@Component({
  selector: 'app-weekday-picker',
  templateUrl: './weekday-picker.component.html',
  styleUrls: ['./weekday-picker.component.css'],
})
export class WeekdayPickerComponent {
  selection: Weekday;
  weekdays = Object.values(Weekday).filter(x => typeof x === 'string');
}
