import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from '@prisma/client';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Erro interno do servidor';
    let error = 'Internal Server Error';

    // HTTP Exceptions (NestJS)
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();

      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (
        typeof exceptionResponse === 'object' &&
        exceptionResponse !== null
      ) {
        const responseObj = exceptionResponse as Record<string, unknown>;
        message =
          typeof responseObj.message === 'string'
            ? responseObj.message
            : typeof responseObj.error === 'string'
              ? responseObj.error
              : message;

        error =
          typeof responseObj.error === 'string' ? responseObj.error : error;
      }
    }
    // Prisma Exceptions
    else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      status = HttpStatus.BAD_REQUEST;

      switch (exception.code) {
        case 'P2002':
          message = 'Já existe um registro com essas informações';
          error = 'Duplicate Entry';
          break;
        case 'P2025':
          message = 'Registro não encontrado';
          error = 'Record Not Found';
          status = HttpStatus.NOT_FOUND;
          break;
        case 'P2003':
          message = 'Operação não permitida devido a dependências';
          error = 'Foreign Key Constraint';
          break;
        case 'P2016':
          message = 'Erro de consulta na base de dados';
          error = 'Query Interpretation Error';
          break;
        default:
          message = 'Erro na operação da base de dados';
          error = 'Database Error';
      }
    }
    // Prisma Validation Error
    else if (exception instanceof Prisma.PrismaClientValidationError) {
      status = HttpStatus.BAD_REQUEST;
      message = 'Dados fornecidos são inválidos';
      error = 'Validation Error';
    }
    // Other Prisma Errors
    else if (exception instanceof Prisma.PrismaClientInitializationError) {
      status = HttpStatus.SERVICE_UNAVAILABLE;
      message = 'Serviço temporariamente indisponível';
      error = 'Service Unavailable';
    }
    // Generic Error
    else if (exception instanceof Error) {
      message = exception.message || message;
      error = exception.name || error;
    }

    // Log do erro (sem expor informações sensíveis)
    const logMessage = {
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      statusCode: status,
      message: message,
      userAgent: request.get('user-agent'),
      ip: request.ip,
    };

    if (status >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(
        `💥 ERRO CRÍTICO: ${JSON.stringify(logMessage)}`,
        exception,
      );
    } else {
      this.logger.warn(`⚠️ ERRO CLIENTE: ${JSON.stringify(logMessage)}`);
    }

    // Resposta padronizada
    const errorResponse = {
      statusCode: status,
      message,
      error,
      timestamp: new Date().toISOString(),
      path: request.url,
    };

    response.status(status).json(errorResponse);
  }
}
