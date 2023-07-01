import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  collection: 'transactions',
})
export class Transaction {
  @Prop({
    required: true,
    trim: true,
  })
  date: string;
  @Prop({
    required: true,
    trim: true,
  })
  amount: number;
  @Prop({
    required: true,
    trim: true,
  })
  description: string;
  @Prop({
    required: true,
    trim: true,
  })
  category: string;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
