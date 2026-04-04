import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);
  showEnrollModal = signal(false);
  mobileOpen = signal(false);
  phoneNumber = signal('');

  closeMobile()  { this.mobileOpen.set(false); }

  openEnrollModal() {
    this.showEnrollModal.set(true);
    this.closeMobile();
  }

  closeEnrollModal() {
    this.showEnrollModal.set(false);
    this.phoneNumber.set('');
  }

  enrollNow() {
    const phone = this.phoneNumber().trim();
    if (!phone) {
      this.toast.show('Please enter a valid phone number');
      return;
    }

    // Validate phone number (basic validation)
    if (!/^\d{10}$/.test(phone)) {
      this.toast.show('Please enter a 10-digit phone number');
      return;
    }

    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/918077022653?text=Hi, I want to enroll for the new batch.`;
    window.open(whatsappUrl, '_blank');

    this.closeEnrollModal();
    this.toast.show('Redirecting to WhatsApp...');
  }
}
