import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeekdayPickerComponent } from './weekday-picker.component';



@NgModule({
  declarations: [WeekdayPickerComponent],
  exports: [WeekdayPickerComponent],
  imports: [CommonModule],
})
export class WeekdayPickerModule {}
