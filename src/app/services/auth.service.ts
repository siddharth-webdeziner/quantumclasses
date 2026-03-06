import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoggedIn = signal(false);
  showModal = signal(false);
  activeTab = signal<'login'|'signup'>('login');

  openModal(tab: 'login'|'signup' = 'login') {
    this.activeTab.set(tab);
    this.showModal.set(true);
  }
  closeModal() { this.showModal.set(false); }

  login() {
    this.isLoggedIn.set(true);
    this.closeModal();
  }
  logout() { this.isLoggedIn.set(false); }
}
