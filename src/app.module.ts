import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionsModule } from './transactions/transactions.module';
import { IncomesModule } from './incomes/incomes.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { StatusService } from './status/status.service';
import { StatusController } from './status/status.controller';
import { AppController } from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(`${process.env.DB_URI}/budgetAdmin`),
    TransactionsModule,
    IncomesModule,
    AuthModule,
  ],
  controllers: [AppController, StatusController],
  providers: [AuthService, StatusService],
})
export class AppModule {}
