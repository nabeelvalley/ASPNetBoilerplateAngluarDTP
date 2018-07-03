# Angular Datetime Picker for ABP

An Angular Datetime Picker that outputs dates as moment.
The npm package can be found [here](https://www.npmjs.com/package/angulardatetimepicker)

## Usage
### App Module

Include the following in your project's NgModule declarations:

```typescript
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
...
@NgModule({
  declarations: [
    ...
    DatePickerComponent,
    DatetimePickerComponent,
    DateStartendtimePickerComponent
  ],
  imports: [
    ...
    FormsModule
  ],
```

### Date Picker
The inital date can be set via the `date` input, if this is not provided the initial value will be the current date

```typescript
  @Input("date") date: moment.Moment = moment(); //Optional
  @Output() onChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
```

The onChange event will fire if and when the date is changed and is complete

#### HTML
```html
<date-picker [date]="date" (onChange)="onChangeHandler($event)"></date-picker>
```

#### Typescript
```typescript
  onChangeHandler(date: moment.Moment){
    this.date = date;
  }
```

### Datetime Picker
The inital date can be set via the `date` input, if this is not provided the initial value will be the current date

```typescript
  @Input("date") date: moment.Moment = moment(); //Optional
  @Output() onChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>();
```

The onChange event will fire if and when the date is changed and is complete

#### HTML
```html
<date-picker [date]="date" (onChange)="onChangeHandler($event)"></date-picker>
```

#### Typescript
```typescript
  onChangeHandler(date: moment.Moment){
    this.date = date;
  }
```

### Date with Start and End Times
The inital datetimes  can be set via the `startDate` and `endDate` inputs, if this is not provided the initial values will be the current date and time

```typescript
  @Input("startDate") startDate: moment.Moment = moment(); //Optional
  @Input("endDate") endDate: moment.Moment = moment(); //Optional
  
  @Output() onChange: EventEmitter<moment.Moment[]> = new EventEmitter<moment.Moment[]>();
```

The onChange event will fire if and when the date is changed and is complete

#### HTML
```html
<date-picker [startDate]="start" [endDate]="end" (onChange)="onChangeHandler($event)"></date-picker>
```

#### Typescript
```typescript
  onChangeHandler(dates: moment.Moment[]){
    this.start = dates[0];
    this.end = dates[1];
  }
```
