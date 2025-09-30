import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  UseGuards,
  Request,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { EnderecosService } from './enderecos.service';
import { CreateEnderecoDto } from '../users/dto/create-endereco.dto';
import { UpdateEnderecoDto } from '../users/dto/update-endereco.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Resource } from '../common/decorators/resource.decorator';
import { ResourceOwner } from '../common/decorators/auth.decorators';
import { ResponseBuilder } from '../common/builders/response.builder';

interface AuthenticatedUser {
  userId?: number;
  id?: number;
}

interface AuthenticatedRequest extends Request {
  user?: AuthenticatedUser;
}

@Controller('enderecos')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EnderecosController {
  // ← CERTIFIQUE-SE DE TER O "export" AQUI
  constructor(private readonly enderecosService: EnderecosService) {}

  @Get()
  async findUserEnderecos(@Request() req: AuthenticatedRequest) {
    const userId = req.user?.userId ?? req.user?.id;

    if (!userId) {
      throw new BadRequestException('Usuário não identificado no token');
    }

    const enderecos = await this.enderecosService.findByUserId(userId);
    return ResponseBuilder.list(enderecos, 'Endereços listados com sucesso');
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const endereco = await this.enderecosService.findOne(id);
    return ResponseBuilder.success(endereco, 'Endereço encontrado');
  }

  @Post()
  async create(
    @Request() req: AuthenticatedRequest,
    @Body() dto: CreateEnderecoDto,
  ) {
    const userId = req.user?.userId ?? req.user?.id;

    if (!userId) {
      throw new BadRequestException('Usuário não identificado no token');
    }

    const endereco = await this.enderecosService.create({ ...dto, userId });
    return ResponseBuilder.created(endereco, 'Endereço criado com sucesso');
  }

  @Patch(':id')
  @ResourceOwner()
  @Resource('endereco')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateEnderecoDto,
  ) {
    const endereco = await this.enderecosService.update(id, dto);
    return ResponseBuilder.updated(endereco, 'Endereço atualizado com sucesso');
  }

  @Delete(':id')
  @ResourceOwner()
  @Resource('endereco')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.enderecosService.remove(id);
    return ResponseBuilder.deleted('Endereço removido com sucesso');
  }
}
