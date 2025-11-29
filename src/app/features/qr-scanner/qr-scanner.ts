import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject, output,
  signal,
  Signal,
  viewChild,
  WritableSignal
} from '@angular/core';
import QrScanner from 'qr-scanner';
import { LocalQrStorageService } from '../../core/services/LocalQrStorage.service';
import { BaseQrStorage } from '../../core/services/base-qr-storage';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.html',
  styleUrl: './qr-scanner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrScannerComponent implements AfterViewInit {
  private cd: ChangeDetectorRef = inject(ChangeDetectorRef);

  videoElem: Signal<ElementRef<HTMLVideoElement> | undefined> = viewChild<ElementRef<HTMLVideoElement>>('video');

  qrScanner!: QrScanner;

  protected result: WritableSignal<any> = signal({});

  scanPaused = output<{ result: QrScanner.ScanResult }>();

  ngAfterViewInit(): void {
    this.qrScanner = new QrScanner(
      this.videoElem()!.nativeElement,
      (result: QrScanner.ScanResult) => {
        this.result.set(result);
        this.qrScanner.pause(true);
        this.scanPaused.emit({ result });
        this.cd.detectChanges();
      },
      { returnDetailedScanResult: true, highlightScanRegion: true, highlightCodeOutline: true },
    );

    this.qrScanner.start();
  }

}
