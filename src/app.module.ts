import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './transactions/transactions.module';
import { IncomesModule } from './incomes/incomes.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.DB_URI}/budgetAdmin`),
    TransactionsModule,
    IncomesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [AuthService],
})
export class AppModule {}
