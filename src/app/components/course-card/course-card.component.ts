import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/models';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Output() enroll = new EventEmitter<Course>();

  get badgeTextColor() {
    return this.course.badgeColor === '#FFB800' ? '#0A0A0F' : 'white';
  }
  get priceDisplay() {
    return this.course.free ? 'FREE' : '₹' + this.course.price.toLocaleString();
  }
  get starsArray() { return Array(Math.round(this.course.rating)).fill(0); }
  get emptyStars() { return Array(5 - Math.round(this.course.rating)).fill(0); }
}
