import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-auth-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth-modal.component.html',
  styleUrl: './auth-modal.component.css'
})
export class AuthModalComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);
  router = inject(Router);

  email = '';
  password = '';
  name = '';
  phone = '';

  submit() {
    this.auth.login();
    this.toast.show('Welcome! Taking you to your dashboard...');
    setTimeout(() => this.router.navigate(['/dashboard']), 1000);
  }
}
