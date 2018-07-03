import {
  Component,
  OnInit,
  Input,
  Output,
  Injector,
  EventEmitter
} from "@angular/core";
import * as moment from "moment";

@Component({
  selector: "date-startendtime-picker",
  templateUrl: "./date-startendtime-picker.component.html",
  styleUrls: ["./date-startendtime-picker.component.css"]
})
export class DateStartendtimePickerComponent implements OnInit {
  @Input("startDate") startDate: Moment = moment();
  @Input("endDate") endDate: Moment = moment();

  @Output() onChange: EventEmitter<Moment[]> = new EventEmitter<Moment[]>();

  startHour: any;
  endHour: any;
  minHour: number = 0;

  startMin: any;
  endMin: any;
  minMinute: number = 0;

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
    this.day = this.startDate.date();
    this.month = this.startDate.month();
    this.year = this.startDate.year();
    this.startHour = this.startDate.hour();
    this.startMin = this.startDate.minute();

    this.day = this.endDate.date();
    this.month = this.endDate.month();
    this.year = this.endDate.year();
    this.endHour = this.endDate.hour();
    this.endMin = this.endDate.minute();

    this.updateDate();
  }

  updateDate(): void {
    this.startMin = this.setValStr(this.startMin);
    this.endMin = this.setValStr(this.endMin);
    this.startHour = this.setValStr(this.startHour);
    this.endHour = this.setValStr(this.endHour);

    this.day = this.getMaxDay(this.day);
    this.checkValid();
    if (this.startHour > this.endHour) {
      this.endHour = this.startHour;
      this.minHour = this.startHour;
    }
    if (this.startHour == this.endHour && this.startMin > this.endMin) {
      this.endMin = this.startMin;
      this.minMinute = this.startMin;
    }
    if (this.day != null && this.month != -1 && this.year > 1800) {
      this.startDate = moment();
      this.startDate.set("year", this.year);
      this.startDate.set("month", this.month);
      this.startDate.set("date", this.day);
      this.startDate.set("hour", this.startHour);
      this.startDate.set("minute", this.startMin);
      this.startDate.set("second", 0);

      this.endDate = moment();
      this.endDate.set("year", this.year);
      this.endDate.set("month", this.month);
      this.endDate.set("date", this.day);
      this.endDate.set("hour", this.endHour);
      this.endDate.set("minute", this.endMin);
      this.endDate.set("second", 0);

      this.onChange.emit([this.startDate, this.endDate]);
    } else {
      this.startDate = null;
      this.endDate = null;
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
    this.startMin = this.startMin > 59 ? 59 : this.startMin;
    this.startHour = this.startHour > 23 ? 23 : this.startHour;

    this.startMin = this.startMin < 0 ? 0 : this.startMin;
    this.startHour = this.startHour < 0 ? 0 : this.startHour;

    this.endMin = this.endMin > 59 ? 59 : this.endMin;
    this.endHour = this.endHour > 23 ? 23 : this.endHour;

    this.endMin = this.endMin < 0 ? 0 : this.endMin;
    this.endHour = this.endHour < 0 ? 0 : this.endHour;

    this.day = this.day < this.maxDay ? this.day : this.maxDay;
    this.day = this.day < 1 ? 1 : this.day;

    this.year = this.year > 2200 ? 2200 : this.year;
    this.year = this.year < 1900 ? 1900 : this.year;
  }

  setValStr(val: number) {
    let valStr: string = val.toString();
    if (valStr.length < 2) {
      return "0" + valStr;
    }
    return val;
  }
}
