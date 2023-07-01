import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { CreateOperationDto } from 'src/dto/create-operation.dto';
import { UpdateOperationDto } from 'src/dto/update-operation.dto';
import { ApiKeyAuthGuard } from 'src/auth/guard/apikey-auth.guard';

@UseGuards(ApiKeyAuthGuard)
@Controller('incomes')
export class IncomesController {
  constructor(private incomeService: IncomesService) {}

  @Get()
  findAll() {
    return this.incomeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateOperationDto) {
    return this.incomeService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.incomeService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateOperationDto) {
    return this.incomeService.update(id, body);
  }
}
