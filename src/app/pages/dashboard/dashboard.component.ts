import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  data = inject(DataService);
  toast = inject(ToastService);
  auth = inject(AuthService);
  router = inject(Router);

  enrolled = this.data.getEnrolledCourses();
  activeNav = 'dashboard';

  stats = [
    { icon:'fa-book-open', bg:'bg-orange', iconColor:'text-orange', val:'6', label:'Enrolled Courses' },
    { icon:'fa-clock',    bg:'bg-teal',   iconColor:'text-teal',   val:'142h', label:'Hours Learned' },
    { icon:'fa-star',     bg:'bg-yellow', iconColor:'text-yellow', val:'89%',  label:'Avg Test Score' },
    { icon:'fa-fire',     bg:'bg-purple', iconColor:'text-purple', val:'28',   label:'Day Streak' },
  ];

  navItems = [
    { key:'dashboard', icon:'fa-th-large', label:'Dashboard' },
    { key:'courses',   icon:'fa-book',     label:'My Courses' },
    { key:'live',      icon:'fa-calendar', label:'Live Classes' },
    { key:'tests',     icon:'fa-pencil-alt',label:'Test Series' },
    { key:'material',  icon:'fa-file-alt', label:'Study Material' },
    { key:'progress',  icon:'fa-chart-bar',label:'My Progress' },
    { key:'notifs',    icon:'fa-bell',     label:'Notifications' },
    { key:'settings',  icon:'fa-cog',      label:'Settings' },
  ];

  upcomingClasses = [
    { icon:'⚡', bg:'bg-orange', title:'Physics – Wave Optics', time:'Today, 7:00 PM', teacher:'Alakh Pandey' },
    { icon:'🧬', bg:'bg-teal',   title:'Biology – Biotechnology', time:'Tomorrow, 6:30 PM', teacher:'Dr. Sachin Sir' },
    { icon:'🔢', bg:'bg-yellow', title:'Maths – Integration by Parts', time:'Wed, 8:00 PM', teacher:'Sachin Gupta' },
  ];

  logout() {
    this.auth.logout();
    this.toast.show('Logged out successfully');
    this.router.navigate(['/']);
  }
}
