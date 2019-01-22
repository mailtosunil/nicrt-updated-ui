import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  filteredStudents: Student[] = [];
  errorMessage: string = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredStudents = this.listFilter ? this.performFilter(this.listFilter) : this.students;
  }


  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.fetchAllStudents().subscribe(
      students => {
        this.students = students;
        this.filteredStudents = students;
      },
      error => this.errorMessage = <any>error
    );
  }

  performFilter(filterBy: string): Student[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.students.filter((student: Student) =>
      student.studName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
