import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { ToastComponent } from './components/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, AuthModalComponent, ToastComponent],
  template: `
    <app-navbar />
    <router-outlet />
    <app-auth-modal />
    <app-toast />
  `
})
export class AppComponent {}
