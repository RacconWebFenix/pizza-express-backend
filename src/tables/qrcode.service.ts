import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as QRCode from 'qrcode';

@Injectable()
export class QRCodeService {
  constructor(private configService: ConfigService) {}

  /**
   * Gera QR Code como Data URL (base64)
   */
  async generateTableQR(tableId: string, tableNumber: number): Promise<string> {
    const frontendUrl =
      this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';

    const url = `${frontendUrl}/mesa/${tableId}`;

    const qrDataURL = await QRCode.toDataURL(url, {
      width: 300,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF',
      },
    });

    console.log(`[QRCode] QR Code gerado para Mesa #${tableNumber}`);

    return qrDataURL;
  }

  /**
   * Gera QR Code como Buffer (para download)
   */
  async generateTableQRBuffer(
    tableId: string,
    tableNumber: number,
  ): Promise<Buffer> {
    const frontendUrl =
      this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';

    const url = `${frontendUrl}/mesa/${tableId}`;

    const buffer = await QRCode.toBuffer(url, {
      width: 300,
      margin: 2,
    });

    console.log(`[QRCode] Buffer gerado para Mesa #${tableNumber}`);

    return buffer;
  }
}
