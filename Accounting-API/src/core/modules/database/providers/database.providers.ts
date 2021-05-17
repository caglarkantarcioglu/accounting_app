import { Sequelize } from 'sequelize-typescript';
import { ExpenseEntity } from '../models/entities/expense.entity';
import { InvoiceEntity } from '../models/entities/invoice.entity';
import { UserEntity } from '../models/entities/user.entity';
import { IncomeEntity } from '../models/entities/income.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 6789,
        username: 'root',
        password: '12345678',
        database: 'accounting',
      });
      sequelize.addModels([ExpenseEntity, InvoiceEntity, UserEntity, IncomeEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
