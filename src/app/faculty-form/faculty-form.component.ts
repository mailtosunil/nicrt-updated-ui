import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-faculty-form',
  templateUrl: './faculty-form.component.html',
  styleUrls: ['./faculty-form.component.css']
})
export class FacultyFormComponent implements OnInit {
  dob: NgbDateStruct;
  date: { year: number, month: number };
  gender: string = 'Choose...';
  maritalSts: string = 'Choose...';
  nationality: string = 'Choose...';
  course: string = 'Choose...';
  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  }
  selectToday() {
    this.dob = this.calendar.getToday();
  }
}
