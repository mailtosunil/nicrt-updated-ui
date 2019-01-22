import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  pageTitle = 'Student Detail';
  errorMessage = '';
  student: Student | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const paramId = +param;
      this.getStudentById(paramId);
    }
  }
  getStudentById(id: number) {
    this.studentService.getStudent(id).subscribe(
      student => this.student = student,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/students']);
  }
}
