import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  pageTitle = 'Course Detail';
  errorMessage = '';
  course: Course | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const paramId = +param;
      this.getCourseById(paramId);
    }
  }
  getCourseById(id: number) {
    this.courseService.getCourse(id).subscribe(
      course => this.course = course,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/courses']);
  }
}
