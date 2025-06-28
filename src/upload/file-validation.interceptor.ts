import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

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
    const request = context.switchToHttp().getRequest<RequestWithFile>();
    const file = request.file;

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
