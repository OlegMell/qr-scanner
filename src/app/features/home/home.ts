import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import QrScanner from 'qr-scanner';

import { QrHistory } from '../qr-history/qr-history';
import { QrScannerComponent } from '../qr-scanner/qr-scanner';
import { ScanButton } from '../../core/components/scan-button/scan-button';
import { BaseQrStorage } from '../../core/services/base-qr-storage';
import { LocalQrStorageService } from '../../core/services/LocalQrStorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    QrHistory,
    QrScannerComponent,
    ScanButton
  ],
})
export class Home {
  private readonly qrStorage: BaseQrStorage = inject(LocalQrStorageService);

  isScannerShown = signal(false);

  protected toggleQrScanner(): void {
    this.isScannerShown.update(curr => !curr);
  }

  protected handleScanPaused({ result }: { result: QrScanner.ScanResult }): void {
    this.isScannerShown.set(false);

    console.debug('[handleScanPaused]', { result });
    try {
      this.qrStorage.saveQrCodes([ ...this.qrStorage.getQrCodes(), result.data ]);
    } catch (e) {
      alert('Failed to save QR code');
      console.error(e);
    }
  }
}
