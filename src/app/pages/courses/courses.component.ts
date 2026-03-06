import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { Course } from '../../models/models';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent, FooterComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  data = inject(DataService);
  toast = inject(ToastService);
  auth = inject(AuthService);
  router = inject(Router);

  allCourses = this.data.getCourses();
  searchQuery = signal('');
  activeCategory = signal('all');

  categories = [
    { key:'all', label:'All Courses' },
    { key:'class12', label:'Class 12' },
    { key:'class11', label:'Class 11' },
    { key:'class10', label:'Class 10' },
  ];

  filteredCourses = computed(() => {
    const q = this.searchQuery().toLowerCase();
    const cat = this.activeCategory();
    return this.allCourses.filter(c =>
      (cat === 'all' || c.category === cat) &&
      (c.title.toLowerCase().includes(q) || c.instructor.toLowerCase().includes(q))
    );
  });

  setCategory(cat: string) { this.activeCategory.set(cat); }

  enroll(course: Course) {
    this.toast.show(`Enrolling in: ${course.title.slice(0,40)}...`);
    if (!this.auth.isLoggedIn()) {
      this.auth.openModal('signup');
    } else {
      setTimeout(() => this.router.navigate(['/dashboard']), 1200);
    }
  }
}
