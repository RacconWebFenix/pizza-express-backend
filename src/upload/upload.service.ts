import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class UploadService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(
    file: Express.Multer.File,
    folder: string = 'pizzas',
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: `pizza-express/${folder}`,
          resource_type: 'image',
          format: 'webp',
          quality: 'auto',
          fetch_format: 'auto',
          transformation: [
            { width: 800, height: 600, crop: 'fill' },
            { quality: 'auto:good' },
          ],
        },
        (error: any, result: any) => {
          if (error) {
            console.error('==> [UploadService] uploadImage - error:', error);
            reject(new Error(error.message || 'Upload failed'));
          } else if (result?.secure_url) {
            console.log('==> [UploadService] uploadImage - result:', result);
            resolve(result.secure_url);
          } else {
            console.error(
              '==> [UploadService] uploadImage - unknown error:',
              result,
            );
            reject(new Error('Upload failed'));
          }
        },
      );
      uploadStream.end(file.buffer);
    });
  }

  async deleteImage(publicId: string): Promise<void> {
    try {
      await cloudinary.uploader.destroy(publicId);
    } catch (error) {
      console.error('Erro ao deletar imagem do Cloudinary:', error);
    }
  }

  extractPublicIdFromUrl(url: string): string {
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename.split('.')[0];
  }
}
