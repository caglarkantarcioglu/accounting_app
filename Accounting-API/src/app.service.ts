import { Injectable } from "@nestjs/common";
import { UserEntity } from "./core/modules/database/models/entities/user.entity";
import { InvoiceEntity } from "./core/modules/database/models/entities/invoice.entity";
import { ExpenseEntity } from "./core/modules/database/models/entities/expense.entity";
import { IncomeEntity } from "./core/modules/database/models/entities/income.entity";

@Injectable()
export class AppService {

  async InitDataBase() {
    const _user = await UserEntity.findOne({ where: { id: 1 } });
    const _expense = await ExpenseEntity.findOne({ where: { id: 1 } });
    const _income = await IncomeEntity.findOne({ where: { id: 1 } });

    if (!_user && !_expense && !_income) {
      await UserEntity.create({
        username: "test01",
        password: "123456",
        email: "test@test.com",
        firstName: "Test",
        lastName: "User"
      });
      await ExpenseEntity.create({
        title: "Test Expense Title",
        content: "Test Expense Content",
        price: 300,
        date: "01/01/2020",
        userId: 1
      });
      await IncomeEntity.create({
        title: "Test Income Title",
        content: "Test Income Content",
        price: 300,
        date: "01/01/2020",
        userId: 1
      });
    }

    return true;
  }


  ping(): string {
    return "Pong!";
  }
}
