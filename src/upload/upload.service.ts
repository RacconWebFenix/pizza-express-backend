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
    try {
      // Para upload via buffer (quando não há path)
      const uploadSource =
        file.path ||
        `data:${file.mimetype};base64,${file.buffer.toString('base64')}`;

      const result = await cloudinary.uploader.upload(uploadSource, {
        folder: `pizza-express/${folder}`,
        resource_type: 'image',
        format: 'webp',
        quality: 'auto',
        fetch_format: 'auto',
        transformation: [
          { width: 800, height: 600, crop: 'fill' },
          { quality: 'auto:good' },
        ],
      });

      return result.secure_url;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Erro desconhecido';
      throw new Error(`Erro ao fazer upload da imagem: ${errorMessage}`);
    }
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
