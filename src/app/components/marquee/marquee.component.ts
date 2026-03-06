import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="marquee-section">
      <div class="marquee-track">
        @for (item of items.concat(items); track $index) {
          <div class="marquee-item">
            <i class="fas fa-check-circle"></i> {{ item }}
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .marquee-section {
      background: var(--dark2); border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border); padding: 18px 0; overflow: hidden;
    }
    .marquee-track { display: flex; animation: marquee 28s linear infinite; width: max-content; }
    .marquee-item {
      display: flex; align-items: center; gap: 8px;
      padding: 6px 28px; white-space: nowrap; font-size: .87rem;
      font-weight: 500; color: var(--text2); border-right: 1px solid var(--border);
    }
    .marquee-item i { color: var(--primary); }
  `]
})
export class MarqueeComponent {
  items = ['JEE Main & Advanced','NEET UG','UPSC CSE','SSC CGL','CAT','GATE','Class 9–12','CUET','Bank PO','NDA/CDS','Defence Exams','CLAT'];
}
