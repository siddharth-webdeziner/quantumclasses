import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  private autoPlayInterval: any;

  slides = [
    {
      title: 'Master Your Subjects',
      description: 'Comprehensive courses for Physics, Chemistry, Biology, Mathematics, and more',
      icon: '📚',
      color: '#FF4F1F',
      image: 'assets/images/slide1.jpeg'
    },
    {
      title: 'Live Interactive Classes',
      description: 'Learn directly from expert educators with real-time doubt solving',
      icon: '👨‍🏫',
      color: '#8B5CF6',
      image: 'assets/images/slide2.jpeg'
    },
    {
      title: '500+ Practice Tests',
      description: 'Chapter-wise tests and mock exams with detailed solutions',
      icon: '📝',
      color: '#00C2A8',
      image: 'assets/images/slide3.jpeg'
    },
    {
      title: 'Learn Anywhere, Anytime',
      description: 'Access courses on mobile, tablet, or desktop - online or offline',
      icon: '📱',
      color: '#FFB800',
      image: 'assets/images/slide4.jpeg'
    },
    {
      title: '95%+ Pass Rate',
      description: 'Join 50 lakh+ students achieving excellence in their board exams',
      icon: '🏆',
      color: '#FF6B1F',
      image: 'assets/images/slide5.jpeg'
    }
  ];

  nextSlide() {
    this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
    this.resetAutoPlay();
  }

  prevSlide() {
    this.currentSlide.set((this.currentSlide() - 1 + this.slides.length) % this.slides.length);
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    this.currentSlide.set(index);
    this.resetAutoPlay();
  }

  ngOnInit() {
    // this.startAutoPlay();
  }

  ngOnDestroy() {
    clearInterval(this.autoPlayInterval);
  }

  private startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
    }, 5000);
  }

  private resetAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }
}
