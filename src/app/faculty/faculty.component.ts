import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { Faculty } from '../faculty';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculties: Faculty[] = [];
  filteredFaculties: Faculty[] = [];
  errorMessage: string = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredFaculties = this.listFilter ? this.performFilter(this.listFilter) : this.faculties;
  }

  constructor(private facultyService: FacultyService) { }

  ngOnInit() {
    this.facultyService.fetchAllFaculties().subscribe(
      faculties => {
        this.faculties = faculties;
        this.filteredFaculties = faculties;
      },
      error => this.errorMessage = <any>error
    );
  }

  performFilter(filterBy: string): Faculty[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.faculties.filter((faculty: Faculty) =>
      faculty.facultyName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
