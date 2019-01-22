import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Student } from './student';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentJsonUrl = 'http://localhost:4200/assets/api/student/students.json';
  constructor(private http: HttpClient) { }

  fetchAllStudents(): Observable<Student[]> {
    // JSON service implementation
    return this.http.get<Student[]>(this.studentJsonUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError));
      // actual service implementation
  }

  getStudent(id: number): Observable<Student | undefined> {
    return this.fetchAllStudents().pipe(
      map((student: Student[]) => student.find(p => p.studId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
