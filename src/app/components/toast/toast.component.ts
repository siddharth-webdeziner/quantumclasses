import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="toast" [class.show]="toast.visible()">
      <i class="fas fa-check-circle toast-icon"></i>
      <span>{{ toast.message() }}</span>
    </div>
  `,
  styles: [`
    .toast {
      position: fixed; bottom: 30px; right: 30px; z-index: 4000;
      background: var(--dark3); border: 1px solid rgba(255,79,31,0.3);
      border-radius: 12px; padding: 14px 20px;
      display: flex; align-items: center; gap: 12px;
      transform: translateY(80px); opacity: 0;
      transition: all 0.35s cubic-bezier(.21,1.02,.73,1);
      max-width: 340px; pointer-events: none;
    }
    .toast.show { transform: translateY(0); opacity: 1; pointer-events: auto; }
    .toast-icon { color: var(--primary); font-size: 1.1rem; }
    span { font-size: 0.88rem; color: var(--text); }
  `]
})
export class ToastComponent {
  toast = inject(ToastService);
}
