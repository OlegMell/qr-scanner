import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Signal, viewChild } from '@angular/core';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.html',
  styleUrl: './qr-scanner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrScannerComponent implements AfterViewInit {

  videoElem: Signal<ElementRef<HTMLVideoElement> | undefined> = viewChild<ElementRef<HTMLVideoElement>>('video');
  qrScanner!: QrScanner;

  ngAfterViewInit(): void {
    this.qrScanner = new QrScanner(
      this.videoElem()!.nativeElement,
      result => console.log('decoded qr code:', result),
      { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
    );

    this.qrScanner.start();
  }

}
