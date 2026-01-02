import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { LocalQrStorageService } from '../../core/services/LocalQrStorage.service';
import { EditListButton } from '../../core/components/edit-list-button/edit-list-button';

@Component({
  selector: 'app-qr-history',
  templateUrl: './qr-history.html',
  styleUrl: './qr-history.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    EditListButton
  ],
})
export class QrHistory {
  protected qrCodes = signal(inject(LocalQrStorageService).getQrCodes());
}
