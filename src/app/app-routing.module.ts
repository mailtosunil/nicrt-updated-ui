import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyFormComponent } from './faculty-form/faculty-form.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'faculties', component: FacultyComponent },
  { path: 'faculty-form', component: FacultyFormComponent },
  { path: 'faculty-details/:id', component: FacultyDetailsComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'course-form', component: CourseFormComponent },
  { path: 'course-details/:id', component: CourseDetailsComponent },
  { path: 'students', component: StudentComponent },
  { path: 'student-form', component: StudentFormComponent },
  { path: 'student-details/:id', component: StudentDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
