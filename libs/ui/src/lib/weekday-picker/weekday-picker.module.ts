import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { WeekdayPickerComponent } from './weekday-picker.component';

@NgModule({
  declarations: [WeekdayPickerComponent],
  exports: [WeekdayPickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
})
export class WeekdayPickerModule {}
