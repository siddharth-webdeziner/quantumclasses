import { Component, inject, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);
  scrolled = signal(false);
  mobileOpen = signal(false);
  showBanner = true;

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  toggleMobile() { this.mobileOpen.update(v => !v); }
  closeMobile()  { this.mobileOpen.set(false); }

  openLogin()  { this.auth.openModal('login');  this.closeMobile(); }
  openSignup() { this.auth.openModal('signup'); this.closeMobile(); }
  logout()     { this.auth.logout(); this.toast.show('Logged out successfully'); }
}
