import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  Signal,
  viewChild, WritableSignal
} from '@angular/core';
import QrScanner from 'qr-scanner';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.html',
  styleUrl: './qr-scanner.scss',
  imports: [
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrScannerComponent implements AfterViewInit {

  videoElem: Signal<ElementRef<HTMLVideoElement> | undefined> = viewChild<ElementRef<HTMLVideoElement>>('video');
  qrScanner!: QrScanner;
  protected result: WritableSignal<any> = signal({});

  ngAfterViewInit(): void {
    this.qrScanner = new QrScanner(
      this.videoElem()!.nativeElement,
      result => {
        this.result.set(result);
      },
      { /* your options or returnDetailedScanResult: true if you're not specifying any other options */ },
    );

    this.qrScanner.start();
  }

}
