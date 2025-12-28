import {
  IsArray,
  ValidateNested,
  ArrayMinSize,
  IsEnum,
  IsString,
  IsNumber,
  Min,
  IsOptional,
  IsUUID,
} from 'class-validator';
import { Type } from 'class-transformer';
import { PaymentMethod } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

class PaymentSplitDto {
  @ApiProperty({ example: 50.0 })
  @IsNumber()
  @Min(0.01)
  amount: number;

  @ApiProperty({ enum: PaymentMethod, example: 'CREDIT_CARD' })
  @IsEnum(PaymentMethod)
  method: PaymentMethod;

  @ApiProperty({ example: 'João Silva', required: false })
  @IsOptional()
  @IsString()
  paidBy?: string;

  @ApiProperty({ example: 5.0, required: false })
  @IsOptional()
  @IsNumber()
  @Min(0)
  tip?: number;

  @ApiProperty({ example: 'pi_stripe_123', required: false })
  @IsOptional()
  @IsString()
  externalId?: string;
}

export class CreateSplitPaymentDto {
  @ApiProperty({ example: 'session-uuid-123' })
  @IsUUID()
  sessionId: string;

  @ApiProperty({ type: [PaymentSplitDto] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => PaymentSplitDto)
  payments: PaymentSplitDto[];
}
