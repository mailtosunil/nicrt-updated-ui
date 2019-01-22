import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from '../faculty.service';
import { Faculty } from '../faculty';

@Component({
  selector: 'app-faculty-details',
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {
  pageTitle = 'Faculty Detail';
  errorMessage = '';
  faculty: Faculty | undefined;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private facultyService: FacultyService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const paramId = +param;
      this.getFacultyById(paramId);
    }
  }

  getFacultyById(id: number) {
    this.facultyService.getFaculty(id).subscribe(
      faculty => this.faculty = faculty,
      error => this.errorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/faculties']);
  }
}
