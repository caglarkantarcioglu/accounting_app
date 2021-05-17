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
import { InvoiceEntity } from './invoice.entity';
import { UserEntity } from './user.entity';


@Table
export class IncomeEntity extends Model<InvoiceEntity> {
  @PrimaryKey
  @AllowNull(false)
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING(255))
  title: string;

  @Column(DataType.STRING(255))
  content: string;

  @Column(DataType.DATE)
  date: Date;

  @Column(DataType.INTEGER)
  price: number;

  @ForeignKey(() => UserEntity)
  @Column(DataType.INTEGER)
  userId: number;

  @BelongsTo(() => UserEntity, { foreignKey: 'userId', as: 'user' })
  user: UserEntity;

  @HasOne(() => InvoiceEntity, {foreignKey: 'incomeId', as: 'invoice'})
  invoice: InvoiceEntity;
}
