import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrScannerComponent } from './qr-scanner';

describe('QrScanner', () => {
  let component: QrScannerComponent;
  let fixture: ComponentFixture<QrScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrScannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrScannerComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
