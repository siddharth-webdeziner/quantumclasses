import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PdfViewerService } from '../../services/pdf-viewer.service';

@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent {
  pdfService = inject(PdfViewerService);
  sanitizer = inject(DomSanitizer);

  safePdfUrl = computed(() => {
    const url = this.pdfService.pdfUrl();
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });

  downloadPdf() {
    const url = this.pdfService.pdfUrl();
    if (url) {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'document.pdf';
      a.click();
    }
  }
}
