import { ChangeDetectionStrategy, Component, signal, TemplateRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScanButton } from '../components/scan-button/scan-button';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    ScanButton,
    NgTemplateOutlet
  ],
})
export class Layout {

  footerTmpl = signal<TemplateRef<void> | undefined>(undefined);

  protected handleRouteChange(e: any): void {
    console.log(e);
    if (e && e.footerTmpl) {
      this.footerTmpl.set(e.footerTmpl());
    }
  }
}
