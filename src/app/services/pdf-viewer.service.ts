import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PdfViewerService {
  pdfUrl = signal<string | null>(null);
  isOpen = signal(false);

  open(url: string) {
    this.pdfUrl.set(url);
    this.isOpen.set(true);
  }

  close() {
    this.isOpen.set(false);
    this.pdfUrl.set(null);
  }
}
