import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LocalQrStorageService } from '../../core/services/LocalQrStorage.service';
import { EditListButton } from '../../core/components/edit-list-button/edit-list-button';

@Component({
  selector: 'app-qr-history',
  templateUrl: './qr-history.html',
  styleUrl: './qr-history.scss',
  imports: [
    EditListButton
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrHistory {
  qrCodes = signal(inject(LocalQrStorageService).getQrCodes());
}
