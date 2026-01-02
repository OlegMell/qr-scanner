import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  output,
  signal,
  Signal,
  viewChild,
  WritableSignal
} from '@angular/core';
import QrScanner from 'qr-scanner';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.html',
  styleUrl: './qr-scanner.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QrScannerComponent implements AfterViewInit, OnDestroy {
  private readonly cd: ChangeDetectorRef = inject(ChangeDetectorRef);
  private qrScanner!: QrScanner;

  protected videoElem: Signal<ElementRef<HTMLVideoElement> | undefined> = viewChild<ElementRef<HTMLVideoElement>>('video');

  protected result: WritableSignal<any> = signal({});

  protected scanPaused = output<{ result: QrScanner.ScanResult }>();

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

  ngOnDestroy(): void {
    this.qrScanner.destroy();
  }

}
