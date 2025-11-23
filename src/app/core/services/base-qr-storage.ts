export interface BaseQrStorage {
  getQrCodes(): string[];

  saveQrCodes(qrCodes: string[]): void;
}
