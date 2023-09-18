import { Component, ElementRef, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("firstCourse") firstCard: CourseCardComponent;
  @ViewChild("courseContainer") containerDiv: ElementRef;
  
  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log('App component - Course selected', course);
    console.log('App component - First card', this.firstCard); 
    console.log('App component - Container div', this.containerDiv);
  }
}
