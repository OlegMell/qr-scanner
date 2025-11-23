import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrHistory } from './qr-history';

describe('QrHistory', () => {
  let component: QrHistory;
  let fixture: ComponentFixture<QrHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrHistory);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
