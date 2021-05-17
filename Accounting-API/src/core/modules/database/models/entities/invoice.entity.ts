import {
  Table,
  Column,
  Model,
  HasOne,
  HasMany,
  PrimaryKey,
  AllowNull,
  AutoIncrement,
  DataType, ForeignKey, BelongsTo,
} from 'sequelize-typescript';
import { UserEntity } from './user.entity';
import { ExpenseEntity } from './expense.entity';
import { IncomeEntity } from './income.entity';

@Table
export class InvoiceEntity extends Model<InvoiceEntity> {
  @Column({
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    type: DataType.UUID
  }) id: string;

  @ForeignKey(() => ExpenseEntity)
  @Column(DataType.INTEGER)
  expenseId?: number;

  @BelongsTo(() => ExpenseEntity, { foreignKey: 'expenseId', as: 'expense' })
  expense: ExpenseEntity;

  @ForeignKey(() => IncomeEntity)
  @Column(DataType.INTEGER)
  incomeId?: number;

  @BelongsTo(() => IncomeEntity, { foreignKey: 'incomeId', as: 'income' })
  income: IncomeEntity;
}
