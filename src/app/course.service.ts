import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Course } from './course';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  //private allCourseUrl = 'http://localhost:8090/fetchAllCourses';
  private courseJsonUrl = 'http://localhost:4200/assets/api/course/courses.json';
  constructor(private http: HttpClient) { }

  saveCourse(course: Course): string {
    return "Course details saved successfully";
  }

  fetchAllCourses(): Observable<Course[]> {
    // JSON service implementation
    //return this.http.get<Course[]>(this.courseJsonUrl).pipe(
      //tap(data => console.log("All: " + JSON.stringify(data))),
      //catchError(this.handleError));
    // actual implementation for actual service
    // return null;(
    return this.http.get<Course[]>('/api/udem/courses').pipe(
      tap(data => console.log("All: " + data)),
      catchError(this.handleError))
  }

  getCourse(id: number): Observable<Course | undefined> {
    return this.fetchAllCourses().pipe(
      map((course: Course[]) => course.find(p => p.courseId === id))
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
