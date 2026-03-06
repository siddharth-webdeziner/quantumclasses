import { Component, inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-download',
  standalone: true,
  templateUrl: './app-download.component.html',
  styleUrl: './app-download.component.css'
})
export class AppDownloadComponent {
  toast = inject(ToastService);
}
