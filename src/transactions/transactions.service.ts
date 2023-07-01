import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from '../schemas/transaction.schema';
import { CreateOperationDto } from '../dto/create-operation.dto';
import { UpdateOperationDto } from '../dto/update-operation.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel(Transaction.name) private transactionModel: Model<Transaction>,
  ) {}

  findAll() {
    return this.transactionModel.find();
  }

  async create(createTransaction: CreateOperationDto) {
    const newTransaction = new this.transactionModel(createTransaction);
    return newTransaction.save();
  }

  async findOne(id: string) {
    return this.transactionModel.findById(id);
  }

  async delete(id: string) {
    return this.transactionModel.findByIdAndDelete(id);
  }

  async update(id: string, transaction: UpdateOperationDto) {
    return this.transactionModel.findByIdAndUpdate(id, transaction, {
      new: true,
    });
  }
}
