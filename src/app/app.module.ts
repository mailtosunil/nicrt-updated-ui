import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CourseComponent } from './course/course.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyFormComponent } from './faculty-form/faculty-form.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentFormComponent,
    StudentDetailsComponent,
    CourseComponent,
    CourseFormComponent,
    CourseDetailsComponent,
    FacultyComponent,
    FacultyFormComponent,
    FacultyDetailsComponent,
    SignupFormComponent,
    WelcomePageComponent,
    LoginFormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
