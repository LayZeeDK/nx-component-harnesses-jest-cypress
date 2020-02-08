import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeekdayPickerModule } from '@nx-component-harnesses-jest-cypress/ui';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    WeekdayPickerModule,
  ],
})
export class AppModule {}
