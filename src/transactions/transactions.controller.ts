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
import { TransactionsService } from './transactions.service';
import { CreateOperationDto } from 'src/dto/create-operation.dto';
import { UpdateOperationDto } from 'src/dto/update-operation.dto';
import { ApiKeyAuthGuard } from 'src/auth/guard/apikey-auth.guard';

@UseGuards(ApiKeyAuthGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  @Get()
  findAll() {
    return this.transactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateOperationDto) {
    return this.transactionService.create(body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.transactionService.delete(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateOperationDto) {
    return this.transactionService.update(id, body);
  }
}
