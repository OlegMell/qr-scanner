import { Injectable } from '@angular/core';
import { BaseQrStorage } from './base-qr-storage';

const LOCAL_STORAGE_KEY = 'QR_CODES';

@Injectable({ providedIn: 'root' })
export class LocalQrStorageService implements BaseQrStorage {

  getQrCodes(): string[] {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
  }

  saveQrCodes(qrCodes: string[]): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(qrCodes));
  }

}
