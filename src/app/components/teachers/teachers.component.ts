import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-teachers',
  standalone: true,
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  data = inject(DataService);
  toast = inject(ToastService);
  teachers = this.data.getTeachers();
  starsArray = Array(5).fill(0);
}
