import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.css"]
})
export class DatePickerComponent implements OnInit {
  @Input("date") date: Moment = moment();
  @Output() onChange: EventEmitter<Moment> = new EventEmitter<Moment>();

  day: number;
  maxDay: number = 31;

  months: any[] = [
    { ind: 0, text: "January" },
    { ind: 1, text: "February" },
    { ind: 2, text: "March" },
    { ind: 3, text: "April" },
    { ind: 4, text: "May" },
    { ind: 5, text: "June" },
    { ind: 6, text: "July" },
    { ind: 7, text: "August" },
    { ind: 8, text: "September" },
    { ind: 9, text: "October" },
    { ind: 10, text: "November" },
    { ind: 11, text: "December" }
  ];
  month: number;
  year: any;

  constructor() {}

  ngOnInit(): void {
    if (this.date) {
      this.day = this.date.date();
      this.month = this.date.month();
      this.year = this.date.year();
    } else {
      this.month = -1;
    }
  }

  updateDate(): void {
    this.day = this.getMaxDay(this.day);
    this.checkValid();
    if (this.day != null && this.month != -1 && this.year > 1800) {
      this.date = moment();
      this.date.set("year", this.year);
      this.date.set("month", this.month);
      this.date.set("date", this.day);
      this.date.set("hour", 12);
      this.date.set("minute", 0);
      this.date.set("second", 0);
      this.onChange.emit(this.date);
    } else {
      this.date = null;
    }
  }

  private getMaxDay(day: number) {
    this.maxDay = 31;
    if (
      !(
        this.month == 0 ||
        this.month == 2 ||
        this.month == 4 ||
        this.month == 6 ||
        this.month == 7 ||
        this.month == 9 ||
        this.month == 11 ||
        this.month == -1
      )
    ) {
      this.maxDay = 30;
    }
    if (this.month == 1) {
      this.maxDay = 28;
    }
    if (this.month == 1 && this.year % 4 == 0) {
      this.maxDay = 29;
    }
    if (day > this.maxDay) {
      day = this.maxDay;
    }
    return day;
  }

  checkValid(): any {
    this.day = this.day < this.maxDay ? this.day : this.maxDay;
    this.day = this.day < 1 ? 1 : this.day;

    this.year = this.year > 2200 ? 2200 : this.year;
    this.year = this.year < 1900 ? 1900 : this.year;
  }
}
