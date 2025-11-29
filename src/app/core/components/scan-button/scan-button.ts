import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'button [qrScanner]',
  exportAs: 'qrScannerButton',
  templateUrl: './scan-button.html',
  styleUrl: './scan-button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScanButton {

}
