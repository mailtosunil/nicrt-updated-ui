import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  dob: NgbDateStruct;
  date: { year: number, month: number };
  errorMsg: string;
  successMsg: string;
  studGender: string = 'Choose...';
  studCat: string = 'Choose...';
  studMaritalSts: string = 'Choose...';
  studCourse: string = 'Choose...';
  language: string = 'Choose...';
  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
    this.errorMsg = "failed";
    this.successMsg = "";
  }

  selectToday() {
    this.dob = this.calendar.getToday();
  }
}
