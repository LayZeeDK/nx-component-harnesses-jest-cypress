import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectHarness } from '@angular/material/select/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { WeekdayPickerComponent } from './weekday-picker.component';
import { WeekdayPickerModule } from './weekday-picker.module';

describe('WeekdayPickerComponent (harnesses)', () => {
  let loader: HarnessLoader;
  let fixture: ComponentFixture<WeekdayPickerComponent>;
  let component: WeekdayPickerComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, WeekdayPickerModule],
    });
    fixture = TestBed.createComponent(WeekdayPickerComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('stores selected weekday', async () => {
    const selectHarness: MatSelectHarness =
      await loader.getHarness(MatSelectHarness);

    await selectHarness.clickOptions({ text: 'Friday' });

    expect(component.selection).toBe('Friday');
  });
});
