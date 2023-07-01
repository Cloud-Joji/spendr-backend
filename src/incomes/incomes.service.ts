import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Income } from 'src/schemas/income.schema';
import { CreateOperationDto } from '../dto/create-operation.dto';
import { UpdateOperationDto } from '../dto/update-operation.dto';

@Injectable()
export class IncomesService {
  constructor(@InjectModel(Income.name) private incomeModel: Model<Income>) {}

  findAll() {
    return this.incomeModel.find();
  }

  async create(createIncome: CreateOperationDto) {
    const newIncome = new this.incomeModel(createIncome);
    return newIncome.save();
  }

  async findOne(id: string) {
    return this.incomeModel.findById(id);
  }

  async delete(id: string) {
    return this.incomeModel.findByIdAndDelete(id);
  }

  async update(id: string, transaction: UpdateOperationDto) {
    return this.incomeModel.findByIdAndUpdate(id, transaction, {
      new: true,
    });
  }
}
