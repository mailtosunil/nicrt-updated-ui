import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Faculty } from './faculty';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private facultyJsonUrl = 'http://localhost:4200/assets/api/faculty/faculties.json';
  constructor(private http: HttpClient) { }

  fetchAllFaculties(): Observable<Faculty[]> {
    // JSON implementation of service
    return this.http.get<Faculty[]>(this.facultyJsonUrl).pipe(
      tap(data => console.log("All: " + JSON.stringify(data))),
      catchError(this.handleError));
    // actual implementation of service
  }

  getFaculty(id: number): Observable<Faculty | undefined> {
    return this.fetchAllFaculties().pipe(
      map((faculty: Faculty[]) => faculty.find(p => p.facultyId === id))
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
