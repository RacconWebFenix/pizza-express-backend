import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class FileValidationInterceptor implements NestInterceptor {
  private readonly allowedMimeTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ];

  private readonly maxFileSize = 5 * 1024 * 1024; // 5MB

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const file = request.file as Express.Multer.File;

    if (file) {
      // Validar tipo de arquivo
      if (!this.allowedMimeTypes.includes(file.mimetype)) {
        throw new BadRequestException(
          'Tipo de arquivo não permitido. Use apenas: JPG, PNG ou WEBP',
        );
      }

      // Validar tamanho do arquivo
      if (file.size > this.maxFileSize) {
        throw new BadRequestException(
          'Arquivo muito grande. Tamanho máximo permitido: 5MB',
        );
      }
    }

    return next.handle();
  }
}
