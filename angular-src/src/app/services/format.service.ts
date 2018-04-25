import { Injectable } from '@angular/core';

@Injectable()
export class FormatService {

  // For formatting dates
  months: Array<string> = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  constructor() { }

  // Return string in the form "<month> <day>"
  getDateString(d1: Date) {
    let d = new Date(d1);
    return this.months[d.getMonth()] + " " + d.getDate();
  }

  // Function for padding a number string with a leading zero
  padZero(n: number) {
    let s = n.toString();
    if(n <= 9) {
      s = "0" + s;
    }
    return s;
  }

}
