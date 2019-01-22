import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../course';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  errorMessage: string = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCourses = this.listFilter ? this.performFilter(this.listFilter) : this.courses;
  }
  constructor(private courseService: CourseService) { }

  performFilter(filterBy: string): Course[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.courses.filter((course: Course) =>
      course.courseName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  ngOnInit() {
    this.courseService.fetchAllCourses().subscribe(
      courses => {
        this.courses = courses;
        this.filteredCourses = courses;
      },
      error => this.errorMessage = <any>error
    );
  }

  getAllCourses(): void {
    //this.courseService.fetchAllCourses().subscribe(course => this.courses = course);
  }
}
