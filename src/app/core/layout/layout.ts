import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QrHistory } from '../../features/qr-history/qr-history';
import { QrScannerComponent } from '../../features/qr-scanner/qr-scanner';

@Component({
  selector: 'app-layout',
  imports: [
    QrHistory,
    QrScannerComponent
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {

}
