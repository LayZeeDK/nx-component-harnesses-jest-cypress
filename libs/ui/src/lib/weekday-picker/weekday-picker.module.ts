import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { WeekdayPickerComponent } from './weekday-picker.component';

@NgModule({
  declarations: [WeekdayPickerComponent],
  exports: [WeekdayPickerComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class WeekdayPickerModule {}
