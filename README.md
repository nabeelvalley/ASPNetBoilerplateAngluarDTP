# Angular Datetime Picker for ABP

An Angular Datetime Picker set to output dates as moment.

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
  @Input("date") date: Moment = moment(); //Optional
  @Output() onChange: EventEmitter<Moment> = new EventEmitter<Moment>();
```

The onChange event will fire if and when the date is changed and is complete

#### HTML
```html
<date-picker [date]="date" (onChange)="onChangeHandler($event)"></date-picker>
```

#### Typescript
```typescript
  onChangeHandler(date: Moment){
    this.date = date;
  }
```

### Datetime Picker
The inital date can be set via the `date` input, if this is not provided the initial value will be the current date

```typescript
  @Input("date") date: Moment = moment(); //Optional
  @Output() onChange: EventEmitter<Moment> = new EventEmitter<Moment>();
```

The onChange event will fire if and when the date is changed and is complete

#### HTML
```html
<date-picker [date]="date" (onChange)="onChangeHandler($event)"></date-picker>
```

#### Typescript
```typescript
  onChangeHandler(date: Moment){
    this.date = date;
  }
```

### Date with Start and End Times
The inital datetimes  can be set via the `startDate` and `endDate` inputs, if this is not provided the initial values will be the current date and time

```typescript
  @Input("startDate") startDate: Moment = moment(); //Optional
  @Input("endDate") endDate: Moment = moment(); //Optional
  
  @Output() onChange: EventEmitter<Moment[]> = new EventEmitter<Moment[]>();
```

The onChange event will fire if and when the date is changed and is complete

#### HTML
```html
<date-picker [startDate]="start" [endDate]="end" (onChange)="onChangeHandler($event)"></date-picker>
```

#### Typescript
```typescript
  onChangeHandler(dates: Moment[]){
    this.start = dates[0];
    this.end = dates[1];
  }
```
