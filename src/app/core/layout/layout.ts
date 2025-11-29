import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QrHistory } from '../../features/qr-history/qr-history';
import { QrScannerComponent } from '../../features/qr-scanner/qr-scanner';
import { ScanButton } from '../components/scan-button/scan-button';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    QrHistory,
    QrScannerComponent,
    ScanButton,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
}
