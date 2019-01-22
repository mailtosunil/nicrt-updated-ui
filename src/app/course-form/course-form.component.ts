import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
  course: Course = { courseId: 0, courseName: '', courseDur: '', courseFee: 0 };
  errorMsg: string;
  courseDur: string = 'Choose...';
  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  saveCourse(): void {
    console.log("User is trying to save course details");
    console.log("values received from form: " + this.course.courseName + ", " + this.course.courseDur + ", " + this.course.courseFee);
    this.errorMsg = this.courseService.saveCourse(this.course);
  }
}
