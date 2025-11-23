import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LocalQrStorageService } from '../../core/services/LocalQrStorage.service';

@Component({
  selector: 'app-qr-history',
  templateUrl: './qr-history.html',
  styleUrl: './qr-history.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrHistory {

  qrCodes = signal(inject(LocalQrStorageService).getQrCodes());



}
