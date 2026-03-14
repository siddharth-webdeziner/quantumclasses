import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { MarqueeComponent } from '../../components/marquee/marquee.component';
import { ExamsComponent } from '../../components/exams/exams.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { TeachersComponent } from '../../components/teachers/teachers.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { AppDownloadComponent } from '../../components/app-download/app-download.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink, HeroComponent, CarouselComponent, MarqueeComponent, ExamsComponent,
    FeaturesComponent, TeachersComponent, TestimonialsComponent,
    AppDownloadComponent, FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);
}
