import { Component, inject, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);
  scrolled = signal(false);
  mobileOpen = signal(false);
  showBanner = true;
  showEnrollModal = signal(false);
  phoneNumber = signal('');

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  toggleMobile() { this.mobileOpen.update(v => !v); }
  closeMobile()  { this.mobileOpen.set(false); }

  openLogin()  { this.auth.openModal('login');  this.closeMobile(); }
  openSignup() { this.auth.openModal('signup'); this.closeMobile(); }
  logout()     { this.auth.logout(); this.toast.show('Logged out successfully'); }

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
    const whatsappUrl = `https://wa.me/919259357083?text=Hi, I want to enroll for the new batch.`;
    window.open(whatsappUrl, '_blank');

    this.closeEnrollModal();
    this.toast.show('Redirecting to WhatsApp...');
  }
}
