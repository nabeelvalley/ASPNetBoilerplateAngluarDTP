import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateStartendtimePickerComponent } from './date-startendtime-picker.component';

describe('DateStartendtimePickerComponent', () => {
  let component: DateStartendtimePickerComponent;
  let fixture: ComponentFixture<DateStartendtimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateStartendtimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateStartendtimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
