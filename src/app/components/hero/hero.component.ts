import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  auth = inject(AuthService);
  toast = inject(ToastService);
  data = inject(DataService);
  liveClasses = this.data.getLiveClasses();
}
