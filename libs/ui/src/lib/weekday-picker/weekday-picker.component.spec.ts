import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { WeekdayPickerComponent } from './weekday-picker.component';
import { WeekdayPickerModule } from './weekday-picker.module';

describe('WeekdayPickerComponent', () => {
  let component: WeekdayPickerComponent;
  let fixture: ComponentFixture<WeekdayPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WeekdayPickerModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekdayPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('stores the picked weekday', () => {
    const matFormField: DebugElement =
      fixture.debugElement.query(By.css('.mat-form-field-flex'));
    matFormField.triggerEventHandler('click', {});
    fixture.detectChanges();

    const matOptions: DebugElement[] =
      fixture.debugElement.queryAll(By.css('.mat-option'));
    const fridayMatOption: DebugElement = matOptions.find(x =>
      (x.nativeElement as HTMLElement).textContent.includes('Friday'));
    fridayMatOption.triggerEventHandler('click', {});
    fixture.detectChanges();

    expect(component.selection).toBe('Friday');
  });
});
