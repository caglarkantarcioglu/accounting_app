import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AllowNull,
  AutoIncrement,
  DataType, IsEmail, ForeignKey, BelongsTo, HasOne, HasMany
} from "sequelize-typescript";
import { ExpenseEntity } from "./expense.entity";
import { IncomeEntity } from "./income.entity";

@Table
export class UserEntity extends Model<UserEntity> {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING(255))
  username: string;

  @Column(DataType.STRING(255))
  firstName: string;

  @Column(DataType.STRING(255))
  lastName: string;

  @Column(DataType.STRING(255))
  email: string;

  @Column(DataType.STRING(255))
  password: string;

  @HasMany(() => ExpenseEntity, { foreignKey: "userId", as: "expenses" })
  expenses: ExpenseEntity;

  @HasMany(() => IncomeEntity, { foreignKey: "userId", as: "incomes" })
  incomes: IncomeEntity;

}
