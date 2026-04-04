import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';
import { PdfViewerComponent } from '../../components/pdf-viewer/pdf-viewer.component';
import { DataService } from '../../services/data.service';
import { PdfViewerService } from '../../services/pdf-viewer.service';
import { PdfResource } from '../../models/models';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, FormsModule, FooterComponent, PdfViewerComponent],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  dataService = inject(DataService);
  pdfService = inject(PdfViewerService);
  
  searchQuery = signal('');
  allPdfs = signal<PdfResource[]>([]);
  
  filteredPdfs = computed(() => {
    const query = this.searchQuery().toLowerCase();
    return this.allPdfs().filter(pdf => 
      pdf.title.toLowerCase().includes(query) ||
      pdf.description.toLowerCase().includes(query) ||
      pdf.subject.toLowerCase().includes(query)
    );
  });

  constructor() {
    this.allPdfs.set(this.dataService.getPdfs());
  }

  openPdf(path: string) {
    this.pdfService.open(path);
  }

  getSubjectIcon(subject: string): string {
    const icons: { [key: string]: string } = {
      'Physics': '⚡',
      'Mathematics': '🔢',
      'Chemistry': '⚗️',
      'Biology': '🧬',
      'English': '📖',
      'History': '📜',
      'Geography': '🌍',
      'Economics': '💰'
    };
    return icons[subject] || '📄';
  }
}
