import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);

  stats = [
    { value: '50L+', label: 'Active Students' },
    { value: '200+', label: 'Expert Teachers' },
    { value: '500+', label: 'Courses' },
    { value: '95%', label: 'Pass Rate' }
  ];

  values = [
    { icon: '🎯', title: 'Mission', desc: 'Democratize quality education by making world-class learning accessible to every student, regardless of their background.' },
    { icon: '👁️', title: 'Vision', desc: 'Create a future where every student can achieve their academic dreams through personalized, technology-enabled learning.' },
    { icon: '💡', title: 'Innovation', desc: 'Continuously evolve our platform with cutting-edge technology to enhance learning outcomes and student success.' },
    { icon: '❤️', title: 'Student First', desc: 'Every decision we make is centered around what\'s best for our students\' growth and academic excellence.' }
  ];

  timeline = [
    { year: '2020', event: 'Quantum Classes was founded with a vision to revolutionize education' },
    { year: '2021', event: 'Reached 10 lakh active students on our platform' },
    { year: '2022', event: 'Expanded to cover all class 12, 11, and 10 subjects across multiple boards' },
    { year: '2023', event: 'Launched mobile app with offline learning capabilities' },
    { year: '2024', event: 'Achieved 95% board exam pass rate among our students' },
    { year: '2025', event: 'Reached 50 lakh+ students and expanded to international markets' }
  ];
}
