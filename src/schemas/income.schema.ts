import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  collection: 'incomes',
})
export class Income {
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

export const IncomeSchema = SchemaFactory.createForClass(Income);
