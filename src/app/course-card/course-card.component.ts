import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent{

  @Input({ required: true}) course: Course;
  @Input() cardIndex: number;
  @Output() courseSelected = new EventEmitter<Course>();

  // we can have alias for the output property and use it in the parent component
  // and localy we can use the name of the property
  // @Output('courseSelected') courseEmitter = new EventEmitter<Course>();


  onCourseView() {
    console.log('Course card component - View course button clicked');
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if(this.course.category == 'BEGINNER') {
      return ['beginner'];
    }
    // or
    // return {
    //   'beginner': this.course.category == 'BEGINNER'
    // };
  }

  cardTitleStyle() {
    return {
      'text-decoration': 'underline',
    };
  }
}
