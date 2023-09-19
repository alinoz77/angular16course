import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild("firstCourse") firstCard: CourseCardComponent;
  @ViewChild("firstCourseElementRef", {read: ElementRef}) firstCardElementRef: ElementRef;
  @ViewChild("courseContainer") containerDiv: ElementRef;

  @ViewChildren(CourseCardComponent) cards: QueryList<CourseCardComponent>;
  
  courses = COURSES;

  // we can access safely the child component properties
  ngAfterViewInit(): void {
    this.cards.changes.subscribe(cards => console.log(cards));
    
  }

  onCourseSelected(course: Course) {
    // console.log('App component - Course selected', course);
    // console.log('App component - First card', this.firstCard); 
    // console.log('App component - Container div', this.containerDiv);
    // console.log('App component - First card element ref', this.firstCardElementRef);
    // console.log('App component - Cards', this.cards);
  }

  onAddCourse() {
    this.courses.push( {
      id: 2,
      description: "RxJs In Practice Course",
      iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
      longDescription: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
      category: 'BEGINNER',
      lessonsCount: 10
    });
  }

  onToggleHighlight($event) {
    console.log($event);
  }
}
