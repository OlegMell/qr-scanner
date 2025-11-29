import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanButton } from './scan-button';

describe('ScanButton', () => {
  let component: ScanButton;
  let fixture: ComponentFixture<ScanButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScanButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScanButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
